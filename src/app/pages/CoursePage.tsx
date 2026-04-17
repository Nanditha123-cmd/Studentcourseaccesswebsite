import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Video, FileText, Brain, Calendar, CheckCircle2, Circle } from "lucide-react";
import { courses, courseNotes, courseMCQs, courseRoadmap } from "../data/courses";

type TabType = "video" | "notes" | "mcqs" | "roadmap";

export function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("video");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const course = courses.find((c) => c.id === courseId);
  const notes = courseId ? courseNotes[courseId] || [] : [];
  const mcqs = courseId ? courseMCQs[courseId] || [] : [];
  const roadmap = courseId ? courseRoadmap[courseId] || [] : [];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course not found</h2>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const handleSubmitMCQs = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    mcqs.forEach((mcq, index) => {
      if (selectedAnswers[index] === mcq.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: mcqs.length };
  };

  const toggleDayCompletion = (day: number) => {
    const newCompleted = new Set(completedDays);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompletedDays(newCompleted);
  };

  const tabs = [
    { id: "video" as TabType, label: "Video Lecture", icon: Video },
    { id: "notes" as TabType, label: "Notes", icon: FileText },
    { id: "mcqs" as TabType, label: "MCQs", icon: Brain },
    { id: "roadmap" as TabType, label: "1-Week Roadmap", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 flex-1">
              <span className="text-4xl">{course.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-[72px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Video Tab */}
        {activeTab === "video" && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={course.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Introduction to {course.title}</h2>
              <p className="text-gray-600">
                Watch this comprehensive video lecture to get started with {course.title}. 
                This tutorial covers the fundamentals and provides hands-on examples.
              </p>
            </div>
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === "notes" && (
          <div className="space-y-6">
            {notes.map((note, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{note.title}</h3>
                <p className="text-gray-700 leading-relaxed">{note.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* MCQs Tab */}
        {activeTab === "mcqs" && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Practice Questions</h2>
              <p className="text-gray-600">Test your knowledge with these multiple-choice questions</p>
            </div>

            <div className="space-y-6">
              {mcqs.map((mcq, qIndex) => (
                <div key={qIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {qIndex + 1}. {mcq.question}
                  </h3>
                  <div className="space-y-2">
                    {mcq.options.map((option, oIndex) => {
                      const isSelected = selectedAnswers[qIndex] === oIndex;
                      const isCorrect = oIndex === mcq.correctAnswer;
                      const showCorrect = showResults && isCorrect;
                      const showWrong = showResults && isSelected && !isCorrect;

                      return (
                        <button
                          key={oIndex}
                          onClick={() => !showResults && handleAnswerSelect(qIndex, oIndex)}
                          disabled={showResults}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            showCorrect
                              ? "border-green-500 bg-green-50"
                              : showWrong
                              ? "border-red-500 bg-red-50"
                              : isSelected
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          } ${showResults ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                          <span className="font-medium">{String.fromCharCode(65 + oIndex)}.</span>{" "}
                          {option}
                          {showCorrect && <span className="ml-2 text-green-600">✓ Correct</span>}
                          {showWrong && <span className="ml-2 text-red-600">✗ Wrong</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              {showResults ? (
                <div className="flex-1">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-lg font-semibold text-gray-900">
                      Your Score: {calculateScore().correct} / {calculateScore().total}
                    </p>
                    <p className="text-gray-600">
                      {((calculateScore().correct / calculateScore().total) * 100).toFixed(0)}% Correct
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowResults(false);
                      setSelectedAnswers({});
                    }}
                    className="mt-4 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Retry Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSubmitMCQs}
                  disabled={Object.keys(selectedAnswers).length !== mcqs.length}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Submit Answers
                </button>
              )}
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === "roadmap" && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">One Week Learning Roadmap</h2>
              <p className="text-gray-600">
                Follow this structured 7-day plan to master {course.title} fundamentals
              </p>
            </div>

            <div className="space-y-4">
              {roadmap.map((day) => {
                const isCompleted = completedDays.has(day.day);
                return (
                  <div
                    key={day.day}
                    className={`border-2 rounded-xl p-6 transition-all ${
                      isCompleted ? "border-green-500 bg-green-50" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <button
                        onClick={() => toggleDayCompletion(day.day)}
                        className="mt-1 flex-shrink-0"
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Day {day.day}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                        </div>

                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-900 mb-2">Topics:</h4>
                          <div className="flex flex-wrap gap-2">
                            {day.topics.map((topic, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Tasks:</h4>
                          <ul className="space-y-1">
                            {day.tasks.map((task, index) => (
                              <li key={index} className="flex items-start gap-2 text-gray-700">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Progress:</span> {completedDays.size} / {roadmap.length} days completed
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
