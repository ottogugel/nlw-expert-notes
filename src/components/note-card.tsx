export function NoteCard() {
  return (
      <button
        className="text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400"
      >
        <span className="text-sm font-medium text-slate-200">2 days ago</span>
        <p className="text-sm leading-6 text-slate-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex omnis vel
          sit perspiciatis maiores, culpa nobis iste consequuntur impedit. Quam
          adipisci magnam nesciunt omnis quo illo eius doloremque ducimus!
          Excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ex omnis vel sit perspiciatis maiores, culpa nobis iste consequuntur
          impedit. Quam adipisci magnam nesciunt omnis quo illo eius doloremque
          ducimus! Excepturi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto odit deserunt libero. Eos ab dolorum ad corrupti, totam a,
          vitae suscipit inventore maiores enim dolores. Fugit officia ut
          mollitia numquam?
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </button>
  );
}