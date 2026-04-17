import { useState } from "react";
import { useNavigate } from "react-router";
import { BookOpen, GraduationCap } from "lucide-react";
import { CourseCard } from "../components/CourseCard";
import { LoginModal } from "../components/LoginModal";
import { courses } from "../data/courses";

export function Home() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleCourseClick = (courseId: string) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (isLoggedIn) {
      navigate(`/course/${courseId}`);
    } else {
      setSelectedCourseId(courseId);
      setShowLoginModal(true);
    }
  };

  const handleLogin = (username: string, password: string) => {
    // Mock authentication - in production, you'd validate against a backend
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    setShowLoginModal(false);
    
    if (selectedCourseId) {
      navigate(`/course/${selectedCourseId}`);
    }
  };

  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">LearnHub</h1>
                <p className="text-sm text-gray-600">Your Journey to Success</p>
              </div>
            </div>
            
            {localStorage.getItem("isLoggedIn") === "true" && (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">
                  Welcome, <span className="font-semibold">{localStorage.getItem("username")}</span>
                </span>
                <button
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("username");
                    window.location.reload();
                  }}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Start Learning Today</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Master In-Demand <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Tech Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access comprehensive courses with video lectures, detailed notes, and practice MCQs. 
            Each course includes a one-week roadmap to guide your learning journey.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course.id)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎥</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Video Lectures</h4>
              <p className="text-gray-600">High-quality video content from expert instructors</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Detailed Notes</h4>
              <p className="text-gray-600">Comprehensive study materials for every topic</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Practice MCQs</h4>
              <p className="text-gray-600">Test your knowledge with interactive quizzes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
        courseName={selectedCourse?.title || ""}
      />
    </div>
  );
}
