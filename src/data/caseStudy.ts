export const caseStudy = {
  code: "CS-2022-04",
  title: "Hope Speech Detection",
  summary:
    "An NLP research project that fine-tunes RoBERTa to detect hope speech in YouTube comments — language that reflects encouragement and belief in positive outcomes — across a dataset focused on Equality, Diversity, and Inclusion (EDI).",
  role: "Solo Researcher & Developer",
  stack: ["Python", "PyTorch", "RoBERTa", "Transformers", "scikit-learn"],
  repoUrl: "https://github.com/amolgupta7/Hope-Speech-Detection",
  heroImage: "",
  heroImageAlt: "",
  architectureImage: "",
  architectureImageAlt: "",
  overview: [
    "Hope speech reflects the belief that one can find pathways to their goals and stay motivated to pursue them. Health professionals and social workers have linked it to well-being and even suicide prevention, making automatic detection of it a meaningful NLP task.",
    "The Hope Speech EDI dataset, sourced from YouTube comments, comprised 22,740 labeled training comments, 2,841 labeled validation comments, and 2,843 unlabeled test comments.",
  ],
  problems: [
    {
      icon: "warning",
      title: "The Challenge",
      description:
        "Classical bag-of-words models struggled to separate genuinely encouraging language from merely neutral or topically related comments, especially across the informal, noisy phrasing typical of YouTube comments.",
    },
    {
      icon: "group",
      title: "The End User",
      description:
        "Platform moderators and EDI researchers who need a reliable, automated way to surface encouraging, inclusive commentary at scale.",
    },
  ],
  architectureDescription:
    "The final model fine-tunes roberta-base (RobertaForSequenceClassification) — 12 transformer layers, a 768 hidden size, 12 attention heads, and a 50,265-token vocabulary with GELU activations — on the labeled training set, benchmarked directly against classical and BERT baselines.",
  decisions: [
    {
      icon: "architecture",
      title: "Transformers vs. classical ML",
      description:
        "Logistic Regression and SVC baselines were quick to train but topped out around 0.70 F1. Fine-tuning transformer models captured contextual meaning far better, at the cost of longer training time and GPU requirements.",
    },
    {
      icon: "storage",
      title: "RoBERTa over BERT",
      description:
        "RoBERTa's more robust pretraining (larger batches, no next-sentence-prediction objective) edged out BERT on every metric, becoming the final model despite a similar architecture and comparable compute cost.",
    },
  ],
  results: [
    { value: "94%", label: "Accuracy" },
    { value: "93%", label: "F1 Score" },
    { value: "93%", label: "Precision" },
    { value: "94%", label: "Recall" },
  ],
  team: ["Solo project — data prep, modeling, and evaluation"],
  nextProject: "More on GitHub",
}

export const tableOfContents = [
  { id: "overview", label: "01. Overview" },
  { id: "problem", label: "02. Problem & Users" },
  { id: "architecture", label: "03. System Architecture" },
  { id: "decisions", label: "04. Technical Decisions" },
  { id: "results", label: "05. Results & Impact" },
]
