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
  span: "featured" | "wide" | "half" | "tall" | "square"
  image: string
  imageAlt: string
}

export const photos: PhotoItem[] = [
  {
    id: 1,
    caption: "01 // PLATFORM",
    span: "featured",
    image: photo01,
    imageAlt:
      "A black-and-white photograph of a crowded Indian railway platform at dusk, with a blurred train passing behind waiting commuters and a street vendor seated with baskets of goods.",
  },
  {
    id: 2,
    caption: "02 // QUIET GAZE",
    span: "tall",
    image: photo02,
    imageAlt:
      "A close, dramatically lit black-and-white portrait of a young boy glancing sideways, shadow tracing down his cheek.",
  },
  {
    id: 3,
    caption: "03 // MISCHIEF",
    span: "square",
    image: photo03,
    imageAlt:
      "A black-and-white overhead shot of a light-colored kitten rolling playfully on a textured concrete surface, looking up at the camera.",
  },
  {
    id: 4,
    caption: "04 // REFLECTIONS",
    span: "wide",
    image: photo04,
    imageAlt:
      "A red Indian Railways carriage window reflecting a parked train and bicycles, with a blurred silhouette passing in the foreground.",
  },
  {
    id: 5,
    caption: "05 // CURIOSITY",
    span: "square",
    image: photo05,
    imageAlt:
      "A macro black-and-white portrait of a kitten's face, both wide eyes and whiskers in sharp focus.",
  },
  {
    id: 6,
    caption: "06 // CALLING OUT",
    span: "square",
    image: photo06,
    imageAlt:
      "A black-and-white close-up of a kitten mid-meow, mouth open, looking directly at the camera.",
  },
  {
    id: 7,
    caption: "07 // DEFIANCE",
    span: "half",
    image: photo07,
    imageAlt:
      "A black-and-white photograph of a white kitten hissing defensively with teeth bared in a dimly lit interior.",
  },
  {
    id: 8,
    caption: "08 // AFTER DARK",
    span: "wide",
    image: photo08,
    imageAlt:
      "A long-exposure night photograph of a vehicle's light trail passing an industrial substation and construction cranes under sodium-orange lights.",
  },
  {
    id: 9,
    caption: "09 // MORNING CHILL",
    span: "tall",
    image: photo09,
    imageAlt:
      "A black-and-white street photograph of a man bundled in a jacket and face covering, walking down an Indian street lit by low winter sun.",
  },
  {
    id: 10,
    caption: "10 // BLUE HOUR RIDGES",
    span: "wide",
    image: photo10,
    imageAlt:
      "Layered mountain ridgelines fading into blue haze at dusk, photographed from an elevated viewpoint.",
  },
  {
    id: 11,
    caption: "11 // WILD GAZE",
    span: "square",
    image: photo11,
    imageAlt:
      "A close portrait of a tan, tabby-marked cat with alert amber eyes and long whiskers, lit in warm directional light.",
  },
  {
    id: 12,
    caption: "12 // TIDE WATCH",
    span: "half",
    image: photo12,
    imageAlt:
      "An older man leaning against his bicycle beneath coconut palms, looking out at the sea.",
  },
  {
    id: 13,
    caption: "13 // COASTAL ERRANDS",
    span: "wide",
    image: photo13,
    imageAlt:
      "An elderly man cycling across a sandy path beside painted stones, framed through a wooden railing in warm afternoon light.",
  },
  {
    id: 14,
    caption: "14 // DUSK CONVERSATION",
    span: "square",
    image: photo14,
    imageAlt:
      "Two figures sitting in silhouette on coastal rocks as a pink and blue dusk sky meets the sea.",
  },
  {
    id: 15,
    caption: "15 // TAKING FLIGHT",
    span: "tall",
    image: photo15,
    imageAlt:
      "A bird in flight silhouetted against a bright sky, framed by the dark archway and carved balcony of a heritage building.",
  },
  {
    id: 16,
    caption: "16 // SOFT FOCUS",
    span: "square",
    image: photo16,
    imageAlt:
      "An extreme close-up of a cat's face rendered almost entirely in soft focus, only the eyes and whiskers discernible.",
  },
]
