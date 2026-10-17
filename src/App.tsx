import { useState } from 'react';
import { 
  Calendar, 
  Bell, 
  BookOpen, 
  Users, 
  ExternalLink, 
  Search, 
  Star 
} from 'lucide-react';
import { 
  CR_LIST, 
  STUDENTS_LIST, 
  QUICK_TOOLS, 
  ROUTINE_EMBED_URL, 
  DRIVE_SLIDES_URL, 
  WA_GROUP_URL, 
  FB_GROUP_URL 
} from './data/appData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'notice' | 'slides' | 'contact'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = STUDENTS_LIST.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.roll.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between pb-20 md:pb-10">
      {/* Header: Desktop & Mobile Responsive */}
      <header className="bg-purple-700 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">অরুণোদয় ২৪</h1>
            <p className="text-xs md:text-sm text-purple-200">FET Student Hub (FE 24)</p>
          </div>

          {/* Desktop Top Navigation Menu */}
          <nav className="hidden md:flex gap-6 items-center">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'home' ? 'bg-purple-800 text-white' : 'text-purple-100 hover:bg-purple-600'}`}
            >
              <Calendar size={18} /> Home
            </button>
            <button 
              onClick={() => setActiveTab('notice')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'notice' ? 'bg-purple-800 text-white' : 'text-purple-100 hover:bg-purple-600'}`}
            >
              <Bell size={18} /> Notice
            </button>
            <button 
              onClick={() => setActiveTab('slides')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'slides' ? 'bg-purple-800 text-white' : 'text-purple-100 hover:bg-purple-600'}`}
            >
              <BookOpen size={18} /> Slides
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'contact' ? 'bg-purple-800 text-white' : 'text-purple-100 hover:bg-purple-600'}`}
            >
              <Users size={18} /> Contacts
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
        {/* TAB 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Live Class Routine Frame */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="text-purple-600" size={22} />
                লাইভ ক্লাস রুটিন
              </h2>
              <div className="w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden border border-gray-200">
                <iframe src={ROUTINE_EMBED_URL} className="w-full h-full border-0" title="Class Routine" />
              </div>
            </div>

            {/* Quick Tools Responsive Grid (3 columns on mobile, 6 on desktop) */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">কুইক টুলস</h2>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                {QUICK_TOOLS.map((tool) => (
                  <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-purple-50 hover:border-purple-200 transition-all text-center">
                    <ExternalLink size={22} className="text-purple-600 mb-2" />
                    <span className="text-xs md:text-sm font-medium text-gray-700">{tool.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NOTICES */}
        {activeTab === 'notice' && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">অফিসিয়াল নোটিশ হাব</h2>
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800 md:text-lg">WhatsApp Announcement Group</h3>
                <p className="text-xs md:text-sm text-gray-500">জরুরি নোটিশের জন্য যুক্ত থাকুন</p>
              </div>
              <a href={WA_GROUP_URL} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors">Join</a>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800 md:text-lg">Facebook Messenger Group</h3>
                <p className="text-xs md:text-sm text-gray-500">অফিসিয়াল মেসেঞ্জার নোটিশ গ্রুপ</p>
              </div>
              <a href={FB_GROUP_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors">Open</a>
            </div>
          </div>
        )}

        {/* TAB 3: SLIDES */}
        {activeTab === 'slides' && (
          <div className="space-y-4 text-center py-12 md:py-20 max-w-2xl mx-auto">
            <BookOpen size={56} className="mx-auto text-purple-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">অ্যাকাডেমিক স্লাইড ও রিসোর্স</h2>
            <p className="text-sm md:text-base text-gray-600">ক্লাসের সমস্ত লেকচার স্লাইড, শিট এবং নোটস পেতে ড্রাইভে এক্সেস করুন।</p>
            <a href={DRIVE_SLIDES_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-md transition-colors text-base">
              গুগল ড্রাইভ খুলুন <ExternalLink size={20} />
            </a>
          </div>
        )}

        {/* TAB 4: CONTACTS */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            {/* CR Section */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Star size={20} className="text-yellow-500 fill-yellow-500" /> Class Representatives (CR)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CR_LIST.map((cr) => (
                  <div key={cr.roll} className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
                    <span className="bg-purple-200 text-purple-800 text-xs px-2.5 py-1 rounded font-bold">Roll {cr.roll}</span>
                    <h3 className="font-semibold text-gray-800 text-base md:text-lg mt-2">{cr.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Students Directory Section */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">স্টুডেন্ট ডিরেক্টরি</h2>
              <div className="relative mb-4 max-w-md">
                <Search className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="নাম অথবা রোল দিয়ে খুঁজুন..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" 
                />
              </div>

              {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {filteredStudents.map((student) => (
                  <div key={student.roll} className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm hover:border-purple-200 transition-colors">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-lg font-semibold">{student.roll}</span>
                    <span className="font-medium text-gray-800 text-sm md:text-base">{student.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation Bar (Mobile only, hidden on desktop viewports) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 flex justify-around items-center z-50">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-purple-600' : 'text-gray-500'}`}>
          <Calendar size={20} /><span className="text-xs font-medium">Home</span>
        </button>
        <button onClick={() => setActiveTab('notice')} className={`flex flex-col items-center gap-1 ${activeTab === 'notice' ? 'text-purple-600' : 'text-gray-500'}`}>
          <Bell size={20} /><span className="text-xs font-medium">Notice</span>
        </button>
        <button onClick={() => setActiveTab('slides')} className={`flex flex-col items-center gap-1 ${activeTab === 'slides' ? 'text-purple-600' : 'text-gray-500'}`}>
          <BookOpen size={20} /><span className="text-xs font-medium">Slides</span>
        </button>
        <button onClick={() => setActiveTab('contact')} className={`flex flex-col items-center gap-1 ${activeTab === 'contact' ? 'text-purple-600' : 'text-gray-500'}`}>
          <Users size={20} /><span className="text-xs font-medium">Contacts</span>
        </button>
      </nav>
    </div>
  );
}