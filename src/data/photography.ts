import photo01 from "@/assets/photography/01.jpg"
import photo02 from "@/assets/photography/02.jpg"
import photo03 from "@/assets/photography/03.jpg"
import photo04 from "@/assets/photography/04.jpg"
import photo05 from "@/assets/photography/05.jpg"
import photo06 from "@/assets/photography/06.jpg"
import photo07 from "@/assets/photography/07.jpg"
import photo08 from "@/assets/photography/08.jpg"
import photo09 from "@/assets/photography/09.jpg"
import photo10 from "@/assets/photography/10.jpg"
import photo11 from "@/assets/photography/11.jpg"
import photo12 from "@/assets/photography/12.jpg"
import photo13 from "@/assets/photography/13.jpg"
import photo14 from "@/assets/photography/14.jpg"
import photo15 from "@/assets/photography/15.jpg"
import photo16 from "@/assets/photography/16.jpg"

export interface PhotoItem {
  id: number
  caption: string
  title: string
  description: string
  /** Whether the source frame was actually shot in black-and-white or color
   * — real, not decorative — shown as a small technical readout alongside
   * each photo instead of fabricated camera EXIF we don't have. */
  originalFormat: "B&W" | "Color"
  span: "featured" | "wide" | "half" | "tall" | "square"
  image: string
  imageAlt: string
  /** Real pixel dimensions of the source file — used to size each gallery
   * tile to the photo's actual aspect ratio instead of cropping it into a
   * fixed box. */
  width: number
  height: number
}

const photoData: PhotoItem[] = [
  {
    id: 1,
    caption: "01 // PLATFORM",
    title: "Evening Platform",
    description:
      "Commuters wait as a train blurs past a railway platform at dusk, a street vendor seated at their feet.",
    originalFormat: "B&W",
    span: "featured",
    image: photo01,
    imageAlt:
      "A black-and-white photograph of a crowded Indian railway platform at dusk, with a blurred train passing behind waiting commuters and a street vendor seated with baskets of goods.",
    width: 2400,
    height: 1490,
  },
  {
    id: 2,
    caption: "02 // QUIET GAZE",
    title: "Unspoken",
    description:
      "A close, unguarded portrait — dramatic light tracing the quiet weight of a child's expression.",
    originalFormat: "B&W",
    span: "tall",
    image: photo02,
    imageAlt:
      "A close, dramatically lit black-and-white portrait of a young boy glancing sideways, shadow tracing down his cheek.",
    width: 2400,
    height: 1600,
  },
  {
    id: 3,
    caption: "03 // MISCHIEF",
    title: "Mid-Roll",
    description:
      "A kitten caught mid-tumble on bare concrete, looking straight up at the lens.",
    originalFormat: "B&W",
    span: "square",
    image: photo03,
    imageAlt:
      "A black-and-white overhead shot of a light-colored kitten rolling playfully on a textured concrete surface, looking up at the camera.",
    width: 2400,
    height: 1610,
  },
  {
    id: 4,
    caption: "04 // REFLECTIONS",
    title: "Emergency Window",
    description:
      "A parked train and a row of bicycles reflected in a carriage window, a passerby blurred into motion.",
    originalFormat: "Color",
    span: "wide",
    image: photo04,
    imageAlt:
      "A red Indian Railways carriage window reflecting a parked train and bicycles, with a blurred silhouette passing in the foreground.",
    width: 2400,
    height: 1600,
  },
  {
    id: 5,
    caption: "05 // CURIOSITY",
    title: "Both Eyes",
    description:
      "A kitten's face filling the frame, whiskers fanned wide in sharp macro focus.",
    originalFormat: "B&W",
    span: "square",
    image: photo05,
    imageAlt:
      "A macro black-and-white portrait of a kitten's face, both wide eyes and whiskers in sharp focus.",
    width: 2400,
    height: 1600,
  },
  {
    id: 6,
    caption: "06 // CALLING OUT",
    title: "Mid-Meow",
    description:
      "Caught announcing itself — mouth open, fully unbothered by the camera.",
    originalFormat: "B&W",
    span: "square",
    image: photo06,
    imageAlt:
      "A black-and-white close-up of a kitten mid-meow, mouth open, looking directly at the camera.",
    width: 2400,
    height: 1600,
  },
  {
    id: 7,
    caption: "07 // DEFIANCE",
    title: "Warning Shot",
    description:
      "Teeth bared, ears pinned — a kitten deciding it's had enough of being photographed.",
    originalFormat: "B&W",
    span: "half",
    image: photo07,
    imageAlt:
      "A black-and-white photograph of a white kitten hissing defensively with teeth bared in a dimly lit interior.",
    width: 2400,
    height: 1600,
  },
  {
    id: 8,
    caption: "08 // AFTER DARK",
    title: "Night Freight",
    description:
      "A long exposure turns a passing vehicle into a streak of light against a floodlit substation.",
    originalFormat: "Color",
    span: "wide",
    image: photo08,
    imageAlt:
      "A long-exposure night photograph of a vehicle's light trail passing an industrial substation and construction cranes under sodium-orange lights.",
    width: 2400,
    height: 1510,
  },
  {
    id: 9,
    caption: "09 // MORNING CHILL",
    title: "Winter Commute",
    description:
      "Bundled against a cold morning, a figure crosses a quiet street lit low and sidelong.",
    originalFormat: "B&W",
    span: "tall",
    image: photo09,
    imageAlt:
      "A black-and-white street photograph of a man bundled in a jacket and face covering, walking down an Indian street lit by low winter sun.",
    width: 2400,
    height: 1350,
  },
  {
    id: 10,
    caption: "10 // BLUE HOUR RIDGES",
    title: "Layers",
    description:
      "Ridgeline after ridgeline fading into blue haze as the light drops.",
    originalFormat: "Color",
    span: "wide",
    image: photo10,
    imageAlt:
      "Layered mountain ridgelines fading into blue haze at dusk, photographed from an elevated viewpoint.",
    width: 2400,
    height: 1495,
  },
  {
    id: 11,
    caption: "11 // WILD GAZE",
    title: "Held Still",
    description:
      "A tabby-marked cat pauses mid-step, ears forward, caught in warm side light.",
    originalFormat: "Color",
    span: "square",
    image: photo11,
    imageAlt:
      "A close portrait of a tan, tabby-marked cat with alert amber eyes and long whiskers, lit in warm directional light.",
    width: 2400,
    height: 1280,
  },
  {
    id: 12,
    caption: "12 // TIDE WATCH",
    title: "Waiting on the Shore",
    description:
      "A man leans on his bicycle beneath the palms, looking out at nothing in particular.",
    originalFormat: "Color",
    span: "half",
    image: photo12,
    imageAlt:
      "An older man leaning against his bicycle beneath coconut palms, looking out at the sea.",
    width: 2400,
    height: 1600,
  },
  {
    id: 13,
    caption: "13 // COASTAL ERRANDS",
    title: "Morning Ride",
    description:
      "An errand run across sand and painted stone, framed by chance through a wooden rail.",
    originalFormat: "Color",
    span: "wide",
    image: photo13,
    imageAlt:
      "An elderly man cycling across a sandy path beside painted stones, framed through a wooden railing in warm afternoon light.",
    width: 2400,
    height: 1600,
  },
  {
    id: 14,
    caption: "14 // DUSK CONVERSATION",
    title: "Low Tide, Low Light",
    description:
      "Two silhouettes talk quietly on the rocks as the sky turns from pink to blue.",
    originalFormat: "Color",
    span: "square",
    image: photo14,
    imageAlt:
      "Two figures sitting in silhouette on coastal rocks as a pink and blue dusk sky meets the sea.",
    width: 2400,
    height: 1600,
  },
  {
    id: 15,
    caption: "15 // TAKING FLIGHT",
    title: "Between Stone",
    description:
      "A pigeon crosses a sliver of sky framed by the dark edge of an old archway.",
    originalFormat: "B&W",
    span: "tall",
    image: photo15,
    imageAlt:
      "A bird in flight silhouetted against a bright sky, framed by the dark archway and carved balcony of a heritage building.",
    width: 2400,
    height: 1600,
  },
  {
    id: 16,
    caption: "16 // SOFT FOCUS",
    title: "Missed Focus, Kept Anyway",
    description:
      "Everything but the eyes dissolves into softness — a frame worth keeping despite the miss.",
    originalFormat: "B&W",
    span: "square",
    image: photo16,
    imageAlt:
      "An extreme close-up of a cat's face rendered almost entirely in soft focus, only the eyes and whiskers discernible.",
    width: 2400,
    height: 1600,
  },
]

// Display order, by photo id — edit this list to reshuffle the gallery.
const order = [1, 2, 12, 13, 3, 8, 5, 7, 10, 9, 11, 6, 14, 15, 4, 16]

export const photos: PhotoItem[] = order.map(
  (id) => photoData.find((photo) => photo.id === id)!
)
