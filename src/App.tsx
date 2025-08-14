import { useState } from 'react';
import { Download, BookOpen, Star, Smartphone, Bot, Calendar, Video, FileText, Award, MessageCircle, Zap } from 'lucide-react';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadAPK = () => {
    setIsDownloading(true);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/SmartBacDz.v1.apk';
    link.download = 'SmartBacDz.v1.apk';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset loading state
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">تطبيق الباكالوريا</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-reverse space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">المميزات</a>
              <a href="#download" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">التحميل</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">حول التطبيق</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-8">
              <Star className="w-4 h-4 ml-2" />
              الإصدار الأول متاح الآن
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              تطبيق <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">الباكالوريا</span> الشامل
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              التطبيق الأول والأشمل للطلاب الجزائريين في الباكالوريا مع الذكاء الاصطناعي. كل ما تحتاجه للنجاح في امتحان الباكالوريا في مكان واحد
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                    جاري التحميل...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 ml-2 group-hover:animate-bounce" />
                    تحميل APK مباشر
                  </>
                )}
              </button>
              <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-colors">
                شاهد الفيديو التوضيحي
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              * التطبيق غير متوفر حالياً في Google Play Store
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              واجهة سهلة الاستخدام
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تصميم عصري وبديهي يجعل التعلم أكثر متعة وفعالية
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl shadow-2xl transform rotate-6 opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-80 h-96 bg-gradient-to-br from-purple-500 to-violet-500 rounded-3xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-reverse space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <Smartphone className="w-6 h-6 text-white/80" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-4">مرحباً بك في تطبيق الباكالوريا</h3>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center">
                        <Bot className="w-5 h-5 ml-3" />
                        <span className="font-medium">ذكاء اصطناعي</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 ml-3" />
                        <span className="font-medium">مواضيع 2010-2025</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center">
                        <Video className="w-5 h-5 ml-3" />
                        <span className="font-medium">فيديوهات تعليمية</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              مميزات التطبيق الثورية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تطبيق شامل مدعوم بالذكاء الاصطناعي لضمان تفوقك في الباكالوريا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">مساعد ذكي بالذكاء الاصطناعي</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                نموذج ذكاء اصطناعي متطور يجيب على جميع أسئلتك ويساعدك في فهم أي درس أو مفهوم صعب
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">مواضيع الباكالوريا 2010-2025</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                أرشيف كامل لجميع مواضيع الباكالوريا من 2010 إلى 2025 لكل الشعب والمواد مع الحلول النموذجية
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">موسوعة الدروس والملخصات</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                مكتبة ضخمة من الدروس المفصلة والملخصات المركزة والاختبارات التفاعلية لجميع المواد
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">جدول تنظيم الوقت الذكي</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                منظم ذكي لجدولة أوقات الدراسة والمراجعة مع تذكيرات وإحصائيات تقدمك اليومي
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">فيديوهات تعليمية منظمة</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                مكتبة فيديو ضخمة مرتبة حسب كل درس مع أفضل الأساتذة الجزائريين وشرح مبسط وواضح
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">أسئلة ذكية وتقييم فوري</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                الذكاء الاصطناعي يولد أسئلة ذكية ويقيم إجاباتك فورياً مع تقديم الحل الصحيح والشرح المفصل
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">اختبارات تفاعلية متقدمة</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                اختبارات ذكية تتكيف مع مستواك وتركز على نقاط ضعفك لضمان تحسن مستمر
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">نظام التحفيز والإنجازات</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                نظام نقاط وشارات تحفيزية لتتبع تقدمك وتحقيق أهدافك الدراسية بطريقة ممتعة
              </p>
            </div>

            {/* Feature 9 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">دعم فوري ومساعدة 24/7</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                مساعد ذكي متاح على مدار الساعة للإجابة على استفساراتك وحل مشاكلك الدراسية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابدأ رحلة النجاح اليوم
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              حمل التطبيق الآن واحصل على جميع الموارد التي تحتاجها للتفوق في امتحان الباكالوريا
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button 
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 ml-3"></div>
                    جاري التحميل...
                  </>
                ) : (
                  <>
                    <Download className="w-6 h-6 ml-3 group-hover:animate-bounce" />
                    تحميل APK مباشر
                  </>
                )}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center">
                <Video className="w-6 h-6 ml-3" />
                شاهد العرض التوضيحي
              </button>
            </div>
            
            <div className="text-sm opacity-75 space-y-1">
              <div>متوفر مجاناً • الإصدار 1.0 • يتطلب Android 5.0+</div>
              <div>⚠️ التطبيق غير متوفر حالياً في Google Play Store</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">درس وملخص</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">سنة من المواضيع</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">فيديو تعليمي</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">مساعد ذكي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-reverse space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">تطبيق الباكالوريا</h3>
                <p className="text-gray-400 text-sm">للطلاب الجزائريين</p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                جميع الحقوق محفوظة © 2024 تطبيق الباكالوريا
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              مصمم خصيصاً لطلاب الباكالوريا في الجزائر • مدعوم بالذكاء الاصطناعي • الإصدار الأول
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
