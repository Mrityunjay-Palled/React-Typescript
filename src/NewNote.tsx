import { NoteData } from "./App"
import { NoteForm } from "./NoteForm"
export function NewNote(){
    return (
        <>
         <h1 className="mb-4">New Note</h1>
         <NoteForm onSubmit={function (data: NoteData): void {
                throw new Error("Function not implemented.")
            } }/>
        </>
    )
}