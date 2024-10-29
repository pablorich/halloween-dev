export function findTheKiller(whisper, suspects) {
  for (let letterIndex = 0; letterIndex < whisper.length; letterIndex++) {
    if (whisper[letterIndex] === "~") continue;
    if (whisper[letterIndex] === "$") {
      suspects = suspects.filter((sus) => {
        return sus.length === whisper.length - 1;
      });
      break;
    }

    suspects = suspects.filter((sus) => {
      return sus.toLowerCase()[letterIndex] === whisper[letterIndex];
    });
  }
  return suspects.join(",");
}
