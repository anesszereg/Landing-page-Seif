import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { CourseStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = generatePageMetadata({
  title: 'Spanish Courses in Algeria',
  description: 'Discover our range of Spanish language courses in Algeria, from beginner to advanced levels with personalized instruction from Seif.',
  keywords: 'Spanish courses Algeria, learn Spanish Algiers, Spanish classes, Spanish language course',
  canonical: 'https://spanishwithseif.com/courses',
});

export default function CoursesPage() {
  return (
    <div className="bg-white pt-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 sm:py-10 md:py-12 text-black">
      {/* Add CourseStructuredData component for this specific page */}
      <CourseStructuredData />
      
      <h1 className="text-4xl font-bold text-center mb-12">Our Spanish Courses</h1>
      
      {/* Course content would go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample course cards */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Beginner Spanish (A1-A2)</h2>
            <p className="text-gray-600 mb-4">Perfect for complete beginners. Learn fundamentals of Spanish grammar, vocabulary and basic conversation skills.</p>
            <div className="bg-blue-100 p-3 rounded-md">
              <p className="text-sm font-semibold">12-week course</p>
              <p className="text-sm">2 sessions per week</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Intermediate Spanish (B1-B2)</h2>
            <p className="text-gray-600 mb-4">Expand your Spanish abilities with complex grammar, conversational practice, and cultural immersion.</p>
            <div className="bg-blue-100 p-3 rounded-md">
              <p className="text-sm font-semibold">16-week course</p>
              <p className="text-sm">2 sessions per week</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Advanced Spanish (C1-C2)</h2>
            <p className="text-gray-600 mb-4">Master complex Spanish concepts, develop fluency, and perfect your accent with native-level training.</p>
            <div className="bg-blue-100 p-3 rounded-md">
              <p className="text-sm font-semibold">20-week course</p>
              <p className="text-sm">2 sessions per week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
