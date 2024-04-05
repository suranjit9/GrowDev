"use client"
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RiCloseLine } from "react-icons/ri";
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Badge } from '../ui/badge';
import { createQuestion } from '@/lib/action/question.action';

const type = 'create';

const Question2 = () => {
    const editorRef = useRef(null);
    const [isSubmitting, setSubmitting] = React.useState(false)

    const QuestionSchema = z.object({
        title: z.string().min(5).max(130),
        explanation: z.string().min(5).max(5000),
        tags: z.array(z.string().min(1).max(15)).min(1).max(3),
      });
  
      const form = useForm({
          resolver: zodResolver(QuestionSchema),
          defaultValues: {
            title: "",
            explanation: "",
            tags: [],
          },
        });

    const handleTagRemove = (tag:string, field:any) => {
      const newTags = field.value.filter((t:string )=> t !== tag);
      field.onChange(newTags); // Update form value
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any) => {
        if (e.key === "Enter" && field.name === 'tags') {
            e.preventDefault()
            const tagInput = e.target as HTMLInputElement;
            const tagValue = tagInput.value.trim();
            if (tagValue !== "") {
              if (tagValue.length > 15) {
                form.setError("tags", {
                  type: 'required', 
                  message: "Tag must be less than 15 characters."
                })
              } else {
                const updatedTags = [...field.value, tagValue];
                field.onChange(updatedTags); // Update form value
                tagInput.value = ""; // Clear input field
                form.clearErrors("tags");
              }
            } else {
              form.trigger();
            }
        }
    }

   
     
    async function onSubmit(values:any) {
        setSubmitting(true);
        try {
            console.log(values);
            await createQuestion(values);
        } catch (error) {
            console.error(error);
        }
        setSubmitting(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full flex flex-col">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="flex w-full flex-col">
                            <FormLabel className="text-base">Question Title</FormLabel>
                            <FormControl className="mt-3.5">
                                <Input 
                                    className="no-focus text-base min-h-[56px] border"
                                    placeholder="Title" {...field} 
                                />
                            </FormControl>
                            <FormDescription className="text-sm text-muted-foreground">
                                Be specific and imagine you&apos;re asking a question to another person.
                            </FormDescription>
                            <FormMessage className="text-sm text-red-500" />
                        </FormItem>
                    )}
                />
                {/* Title End ----- */}
                <FormField
                    control={form.control}
                    name="explanation"
                    render={({ field }) => (
                        <FormItem className="flex w-full flex-col">
                            <FormLabel className="text-base">Details Explanation of your Problem</FormLabel>
                            <FormControl className="mt-3.5">
                                {/* Editor */}
                                <Editor
                                    apiKey='y5hf6nspgt19boly9h0cy9a05lw3cj5aj3r2ew7wo9fc0rtt'
                                    onInit={(evt, editor) => {
                                        editorRef.current = editor;
                                    }}
                                    onBlur={field.onBlur}
                                    onEditorChange={(content) => field.onChange(content)}
                                    initialValue="<p>This is the initial content of the editor.</p>"
                                    init={{
                                        height: 350,
                                        menubar: true,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'codesample', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'code',
                                        ],
                                        toolbar: 'undo redo | ' +
                                            'codesample | bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat ',
                                        content_style: 'body { font-family:Inter,Helvetica,Arial,sans-serif; font-size:16px }'
                                    }}
                                />
                                {/* Editor */}
                            </FormControl>
                            <FormDescription className="text-sm text-muted-foreground">
                                Explanation of the problem in detail (minimum 20 characters).
                            </FormDescription>
                            <FormMessage className="text-sm text-red-500" />
                        </FormItem>
                    )}
                />
                {/* explanation End ----- */}
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem className="flex w-full flex-col">
                            <FormLabel className="text-base">Tags</FormLabel>
                            <FormControl className="mt-3.5">
                                <>
                                    <Input 
                                        className="no-focus text-base min-h-[56px] border"
                                        placeholder="Tags"
                                        onKeyDown={(e) => handleInputKeyDown(e, field)}
                                    />
                                    {field.value.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {field.value.map((tag, index) => (
                                                <Badge
                                                    key={index}
                                                    className='text-base text-white bg-slate-700 dark:bg-slate-500 border-none flex items-center justify-center gap-2 rounded-md px-4 py-2 capitalize mt-2'
                                                    onClick={() => handleTagRemove(tag, field)}
                                                >
                                                    {tag}
                                                    <RiCloseLine />
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </>
                            </FormControl>
                            <FormDescription className="text-sm text-muted-foreground">
                                Add up to 3 tags to describe what your question is about.
                            </FormDescription>
                            <FormMessage className="text-sm text-red-500" />
                        </FormItem>
                    )}
                /> 
                <Button className='w-fit bg-yellow text-white' disabled={isSubmitting} type="submit">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        </Form>
    );
};

export default Question2;
