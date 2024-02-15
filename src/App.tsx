import { useState } from 'react';
import logo from './assets/logo.svg'
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';

interface Note {
  id: string
  date: Date
  content: string
}


export function App() {

  const [notes, setNotes ] = useState<Note[]>([]) // Esse array com objetos do formato Note

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(), // Gera um id unico/universal em formato de string.
      date: new Date(),
      content,
    }

    setNotes([newNote ,...notes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form>
        <input
          type="text"
          placeholder="Search your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
