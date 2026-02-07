import type { ManaBoxExport } from "../demo/types"

export function txtToCards(file: File): Promise<ManaBoxExport[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result as string;
      const lines = text
        .split("\n")
        .map(l => l.trim())
        .filter(Boolean);

      const cards: ManaBoxExport[] = [];

      let isCommander = false;

      lines.forEach(line => {
        if (line.startsWith("// COMMANDER")) {
          isCommander = true;
          return;
        }

        const regex = /^(\d+)\s+(.+?)\s+\((\w+)\)\s+(\S+)(\s+\*F\*)?$/
        const match = line.match(regex);

        if (match) {
          const [, count, name, set_code, collector_number, foil] = match;

          cards.push({
            count: parseInt(count),
            name,
            set_code,
            collector_number,
            is_foil: !!foil,
            is_commander: isCommander,
            is_basic_land: ["Plains","Island","Swamp","Mountain","Forest"].includes(name),
            raw_line: line
          })
        } else {
          console.warn("No parseada:", line);
        }
      });

      resolve(cards);
    };

    reader.onerror = () => {
      reject(reader.error);
    }

    reader.readAsText(file);
  });
}
