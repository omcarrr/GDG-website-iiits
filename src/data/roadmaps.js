// "Pick your path" — study roadmaps shown as flow charts on home (#paths).
// Each track: ordered stages (what to study, skills, where to learn, rough time) → job roles.
// branchNotes: per-branch "your edge" + "add these first" for CSE / ECE / AIDS students.
// Edit freely; keep each bullet short — the UI renders chips and pills, not paragraphs.

export const branches = ["CSE", "ECE", "AIDS"];

export const tracks = [
  {
    id: "appdev",
    title: "App Development",
    short: "App Dev",
    color: "#34a853",
    tagline: "Ship apps people keep on their home screen.",
    branchNotes: {
      CSE: {
        edge: ["OOP + DSA from coursework", "Comfort with Java/C++ syntax"],
        first: ["Pick Kotlin or Dart and stick to it", "Build UI daily, not just theory"],
      },
      ECE: {
        edge: ["Sensors, BLE and IoT know-how", "Great fit for hardware-companion apps"],
        first: ["OOP in Kotlin/Dart", "Git + basic DSA before frameworks"],
      },
      AIDS: {
        edge: ["Python + data skills for smart features", "On-device ML (TFLite / ML Kit) is your niche"],
        first: ["OOP + one app language", "UI state and app architecture basics"],
      },
    },
    stages: [
      {
        title: "Foundations",
        time: "3–4 weeks",
        learn: ["One language: Kotlin (Android) or Dart (Flutter)", "OOP: classes, interfaces, generics", "Git + GitHub workflow"],
        skills: ["Kotlin / Dart", "OOP", "Git"],
        resources: [
          { name: "Kotlin docs", url: "https://kotlinlang.org/docs/getting-started.html" },
          { name: "Dart language tour", url: "https://dart.dev/language" },
          { name: "Learn Git Branching", url: "https://learngitbranching.js.org" },
        ],
      },
      {
        title: "Build UIs",
        time: "4–6 weeks",
        learn: ["Declarative UI: Jetpack Compose or Flutter widgets", "Layouts, lists, theming, navigation", "State: remember / setState / ViewModel"],
        skills: ["Jetpack Compose", "Flutter", "Material Design"],
        resources: [
          { name: "Android Basics with Compose", url: "https://developer.android.com/courses/android-basics-compose/course" },
          { name: "Flutter codelabs", url: "https://docs.flutter.dev/codelabs" },
          { name: "Material 3", url: "https://m3.material.io" },
        ],
      },
      {
        title: "Data & APIs",
        time: "3–4 weeks",
        learn: ["REST APIs + JSON parsing (Retrofit / http / Dio)", "Local storage: Room, SQLite, DataStore", "Firebase Auth, Firestore, Cloud Messaging"],
        skills: ["REST", "Room / SQLite", "Firebase"],
        resources: [
          { name: "Firebase codelabs", url: "https://firebase.google.com/codelabs" },
          { name: "Android data layer", url: "https://developer.android.com/topic/architecture/data-layer" },
        ],
      },
      {
        title: "Architecture & testing",
        time: "3–4 weeks",
        learn: ["MVVM / clean architecture", "Coroutines & Flow / async-await", "Dependency injection (Hilt / Riverpod)", "Unit + UI tests"],
        skills: ["MVVM", "Coroutines", "Hilt / Riverpod", "Testing"],
        resources: [
          { name: "Guide to app architecture", url: "https://developer.android.com/topic/architecture" },
          { name: "Now in Android (sample)", url: "https://github.com/android/nowinandroid" },
        ],
      },
      {
        title: "Ship it",
        time: "2–3 weeks",
        learn: ["Release builds, signing, Play Console", "CI with GitHub Actions", "Crashlytics + analytics"],
        skills: ["Play Store", "CI/CD", "Crashlytics"],
        resources: [
          { name: "Play Console guide", url: "https://developer.android.com/distribute/console" },
          { name: "GitHub Actions", url: "https://docs.github.com/actions" },
        ],
      },
      {
        title: "Projects & portfolio",
        time: "Ongoing",
        learn: ["2–3 polished apps on the Play Store / GitHub", "Clone a real app (notes, chat, expense tracker)", "Join a hackathon / GDG build night"],
        skills: ["Product sense", "Code reviews", "Open source"],
        resources: [
          { name: "Compose samples", url: "https://github.com/android/compose-samples" },
          { name: "The Odin Project (web)", url: "https://www.theodinproject.com" },
        ],
      },
    ],
    roles: ["Android Developer", "Flutter / Cross-platform Dev", "iOS Developer", "Frontend / Web Developer", "Mobile SDE"],
  },
  {
    id: "backend",
    title: "Backend Development",
    short: "Backend",
    color: "#ea4335",
    tagline: "Build the APIs, databases and servers behind every app.",
    branchNotes: {
      CSE: {
        edge: ["DBMS, OS and networks already in your syllabus", "DSA prep doubles as interview prep"],
        first: ["Pick one stack and go deep", "Deploy something real early"],
      },
      ECE: {
        edge: ["Computer networks + systems thinking", "Strong fit for IoT backends and embedded gateways"],
        first: ["DSA + DBMS + OS basics", "Linux command line"],
      },
      AIDS: {
        edge: ["SQL + Python from data courses", "Natural path to data / ML platform backends"],
        first: ["HTTP + REST fundamentals", "System design + DBMS depth"],
      },
    },
    stages: [
      {
        title: "Foundations",
        time: "4–6 weeks",
        learn: ["One language: Java, Go, Python or JavaScript (Node)", "DSA basics: arrays, hashing, trees, graphs", "Linux CLI + Git"],
        skills: ["Java / Go / Python / Node", "DSA", "Linux", "Git"],
        resources: [
          { name: "CS50x", url: "https://cs50.harvard.edu/x/" },
          { name: "NeetCode roadmap", url: "https://neetcode.io/roadmap" },
          { name: "Linux Journey", url: "https://linuxjourney.com" },
        ],
      },
      {
        title: "How the web works",
        time: "2–3 weeks",
        learn: ["HTTP methods, status codes, headers", "REST API design", "Auth: sessions, JWT, OAuth 2.0"],
        skills: ["HTTP", "REST", "JWT / OAuth"],
        resources: [
          { name: "MDN: HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
          { name: "roadmap.sh/backend", url: "https://roadmap.sh/backend" },
        ],
      },
      {
        title: "Databases",
        time: "3–4 weeks",
        learn: ["SQL: joins, indexes, transactions", "Schema design + normalisation", "One NoSQL store: MongoDB / Firestore / Redis"],
        skills: ["PostgreSQL / MySQL", "Indexing", "MongoDB", "Redis"],
        resources: [
          { name: "SQLBolt", url: "https://sqlbolt.com" },
          { name: "PostgreSQL tutorial", url: "https://www.postgresqltutorial.com" },
        ],
      },
      {
        title: "Frameworks",
        time: "4–6 weeks",
        learn: ["Spring Boot, Express / NestJS, or FastAPI", "Validation, errors, logging", "Testing APIs (JUnit / Jest / pytest)"],
        skills: ["Spring Boot", "Express", "FastAPI", "API testing"],
        resources: [
          { name: "Spring guides", url: "https://spring.io/guides" },
          { name: "FastAPI tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
          { name: "Express docs", url: "https://expressjs.com" },
        ],
      },
      {
        title: "DevOps & cloud",
        time: "3–4 weeks",
        learn: ["Docker images + compose", "CI/CD pipelines", "Deploy on Google Cloud (Cloud Run, Cloud SQL)"],
        skills: ["Docker", "CI/CD", "Google Cloud", "Nginx"],
        resources: [
          { name: "Docker get started", url: "https://docs.docker.com/get-started/" },
          { name: "Google Cloud Skills Boost", url: "https://www.cloudskillsboost.google" },
        ],
      },
      {
        title: "System design",
        time: "Ongoing",
        learn: ["Caching, queues, load balancing", "Scaling reads/writes, sharding", "Microservices vs monolith trade-offs"],
        skills: ["Caching", "Kafka / PubSub", "Scalability"],
        resources: [
          { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
          { name: "Designing Data-Intensive Apps", url: "https://dataintensive.net" },
        ],
      },
    ],
    roles: ["Backend Engineer", "Software Development Engineer", "Cloud Engineer", "DevOps / SRE", "Data Engineer"],
  },
  {
    id: "aiml",
    title: "AI / Machine Learning",
    short: "AI/ML",
    color: "#4285f4",
    tagline: "Teach machines to see, read and predict.",
    branchNotes: {
      CSE: {
        edge: ["Strong programming + algorithms", "Easy jump to ML engineering and MLOps"],
        first: ["Linear algebra + probability refresh", "NumPy / Pandas fluency"],
      },
      ECE: {
        edge: ["Signals, DSP and linear systems", "Natural fit for computer vision, audio and edge AI"],
        first: ["Python + DSA basics", "Classical ML before deep learning"],
      },
      AIDS: {
        edge: ["Math, stats and ML already in coursework", "Head start on data science roles"],
        first: ["Software engineering habits: Git, testing, APIs", "Deployment + MLOps"],
      },
    },
    stages: [
      {
        title: "Math & Python",
        time: "4–6 weeks",
        learn: ["Linear algebra, probability, calculus intuition", "Python, NumPy, Pandas, Matplotlib", "Data cleaning + EDA"],
        skills: ["Linear algebra", "Statistics", "Python", "Pandas"],
        resources: [
          { name: "3Blue1Brown: linear algebra", url: "https://www.3blue1brown.com/topics/linear-algebra" },
          { name: "Khan Academy: stats", url: "https://www.khanacademy.org/math/statistics-probability" },
          { name: "Kaggle Learn: Python + Pandas", url: "https://www.kaggle.com/learn" },
        ],
      },
      {
        title: "Classical ML",
        time: "4–6 weeks",
        learn: ["Regression, classification, trees, ensembles", "Train/test split, cross-validation, metrics", "Feature engineering"],
        skills: ["scikit-learn", "XGBoost", "Model evaluation"],
        resources: [
          { name: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
          { name: "Andrew Ng ML Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
          { name: "scikit-learn guide", url: "https://scikit-learn.org/stable/user_guide.html" },
        ],
      },
      {
        title: "Deep learning",
        time: "6–8 weeks",
        learn: ["Neural nets, backprop, optimisers", "CNNs, RNNs, Transformers", "PyTorch or TensorFlow / Keras"],
        skills: ["PyTorch", "TensorFlow", "CNNs", "Transformers"],
        resources: [
          { name: "fast.ai course", url: "https://course.fast.ai" },
          { name: "Dive into Deep Learning", url: "https://d2l.ai" },
          { name: "Karpathy: Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html" },
        ],
      },
      {
        title: "Specialise",
        time: "4–8 weeks",
        learn: ["Computer vision, NLP, or GenAI", "LLMs: prompting, fine-tuning, RAG", "Read 1 paper a week"],
        skills: ["Hugging Face", "LLMs / RAG", "OpenCV", "Gemini API"],
        resources: [
          { name: "Hugging Face courses", url: "https://huggingface.co/learn" },
          { name: "Google AI for developers", url: "https://ai.google.dev" },
        ],
      },
      {
        title: "Deploy & MLOps",
        time: "3–4 weeks",
        learn: ["Serve models with FastAPI + Docker", "Experiment tracking, model versioning", "Vertex AI pipelines / monitoring"],
        skills: ["FastAPI", "Docker", "MLflow", "Vertex AI"],
        resources: [
          { name: "Made With ML", url: "https://madewithml.com" },
          { name: "Vertex AI docs", url: "https://cloud.google.com/vertex-ai/docs" },
        ],
      },
      {
        title: "Kaggle & projects",
        time: "Ongoing",
        learn: ["Compete on Kaggle, read top notebooks", "End-to-end projects with a live demo", "Write up results on GitHub / a blog"],
        skills: ["Kaggle", "Research reading", "Storytelling with data"],
        resources: [
          { name: "Kaggle competitions", url: "https://www.kaggle.com/competitions" },
          { name: "Hugging Face daily papers", url: "https://huggingface.co/papers" },
        ],
      },
    ],
    roles: ["ML Engineer", "Data Scientist", "AI / GenAI Engineer", "MLOps Engineer", "Computer Vision / NLP Engineer", "Research Engineer"],
  },
];
