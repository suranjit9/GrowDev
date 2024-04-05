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
// import { QuestionSchema } from "@/lib/validations"
import { Badge } from '../ui/badge';
import { createQuestion } from '@/lib/action/question.action';

const type:any = 'create';
const QuestionSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(5).max(5000),
  tags:z.array(z.string().min(15).max(15)).min(1).max(3),
})

const Question = () => {
    const editorRef = useRef(null);
    const [isSubmiting, setSubmiting] = React.useState(false)

    const handleTagRemove = (tag:string, field:any)=>{
      const newTags = field.value.filter((t:string) => t !== tag);
      form.setValue("tags", newTags);
      console.log(field)
    }
    const hendleInputKeyDown = (e:React.KeyboardEvent<HTMLInputElement>, field:any) =>{
        if (e.key === "Enter" && field.name === 'tags') {
            e.preventDefault()
            const tagInput = e.target as HTMLInputElement;
            const tagValue = tagInput.value.trim();
            if (tagValue !== "") {
              if (tagValue.length >15) {
                return form.setError("tags", {
                  type:'required', 
                  message: "Tag must be less than 15 characters."
                })
              }
              if (!field.value.includes(tagValue as never)) {
                form.setValue("tags", [...field.value, tagValue]);
                tagInput.value = ""
                form.clearErrors("tags");
              }
            }else{
              form.trigger();
            }
        }
    }

    const form = useForm<z.infer<typeof QuestionSchema>>({
        resolver: zodResolver(QuestionSchema),
        defaultValues: {
          title: "",
          explanation: "",
          tags: [],
        },
      })
     
      // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof QuestionSchema>) {
        setSubmiting(true)

        try {
          // make an API call -> create a question
            console.log(values)
            createQuestion(values)
        } catch (error) {
          setSubmiting(false)
          console.log(error)
        }
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      return (
       <>
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
                    placeholder="Title" {...field} />
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
                      onInit={(evt, editor) =>{
                        // @ts-ignore
                        editorRef.current = editor
                      }}
                      onBlur={field.onBlur}
                      onEditorChange={(field.onChange as any)}
                      initialValue="<p>This is the initial content of the editor.</p>"
                      init={{
                        height: 350,
                        menubar: true,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code','codesample', 'fullscreen',
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
                     explanation the problem in detail and Minimun 20 characters.
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
                    placeholder="tags"
                    onKeyDown={(e) => hendleInputKeyDown(e, field)}/>
                    {field.value.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value.map((tag:any) => {
                              return (
                                <Badge
                                className='text-base text-white bg-slate-700 dark:bg-slate-500 border-none flex items-center justify-center gap-2 rounded-md px-4 py-2 capitalize mt-2'
                                key={tag} onClick={()=> handleTagRemove(tag, field)}>
                                  {tag}
                                  <RiCloseLine />
                                </Badge>
                              )
                            })
                          }
                          </div>
                      )
                    }
                   </>
                    
                  </FormControl>
                  <FormDescription className="text-sm text-muted-foreground">
                     Add up to 3 tags to describe what your question is about.
                  </FormDescription>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            /> 
         
            <Button className=' w-fit bg-yellow text-white' disabled={isSubmiting} type="submit">

              {isSubmiting ?(
                <>
                {type === 'edit' ? 'Updating...' : 'Submitting...'}
                </>
              ):(
                  <>{type === 'edit' ? 'Update' : 'Ask a Question'}</>
              )
              }
            </Button>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
       </>
      )
};

export default Question;