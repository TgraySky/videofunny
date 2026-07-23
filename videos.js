/**
 * Video catalog — titles and embed links live here only.
 * Add a new video: { id, title, embed }
 */
const VIDEOS = [
  {
    id: "one",
    title: "Funny Cats Compilation 2016 [BEST OF] Funny Videos Smile 5 minutes",
    embed: "https://playmate.to/embed/6hzz4QII7bYKI",
  },
  {
    id: "two",
    title: "5 Minutes Funny Cat & Dog Compilation",
    embed: "https://playmate.to/embed/7SChl1EoVp0L4",
  },
  {
    id: "three",
    title: "Funny Animal Fails — Try Not To Laugh (5 Minutes)",
    embed: "https://playmate.to/embed/zkdZAF3A7S8mU",
  },
  {
    id: "four",
    title: "Top 55 Hilarious Cat Moments You'll Ever Watch Under 5 Minutes",
    embed: "https://playmate.to/embed/zFBrChoVYZwLf",
  },
];

function getVideoById(id) {
  return VIDEOS.find((v) => v.id === id) || null;
}
