export function getEmbedUrl(url: string): string {
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}?controls=0`;

  const shortYoutubeRegex = /(?:https?:\/\/)?youtu\.be\/([^?]+)/;
  const shortMatch = url.match(shortYoutubeRegex);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?controls=0`;

  const twitchClipRegex = /twitch\.tv\/[^/]+\/clip\/([\w-]+)/;
  const twitchMatch = url.match(twitchClipRegex);
  if (twitchMatch) {
    const clipId = twitchMatch[1];
    return `https://clips.twitch.tv/embed?clip=${clipId}&parent=localhost`; // à adapter en prod
  }

  return url;
}