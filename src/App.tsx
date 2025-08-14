import { useState } from 'react';
import { Download, BookOpen, Star, Smartphone, Bot, Calendar, Video, FileText, Award, MessageCircle, Zap, Target, Play, Users, TrendingUp, Shield } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" dir="rtl">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SmartBacDz APK</h1>
                <p className="text-xs text-gray-400 font-medium">تطبيق الباكالوريا الذكي</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-reverse space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold hover:scale-105">المميزات</a>
              <a href="#download" className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-semibold hover:scale-105">التحميل</a>
              <a href="#about" className="text-gray-300 hover:text-pink-400 transition-all duration-300 font-semibold hover:scale-105">حول التطبيق</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full text-cyan-300 text-sm font-bold mb-8 border border-cyan-500/30">
              <Star className="w-5 h-5 ml-2 animate-pulse" />
              الإصدار الأول • 13 ميجابايت • مجاني تماماً
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SmartBacDz</span>
              <br />
              <span className="text-3xl md:text-5xl font-bold text-gray-300">تطبيق الباكالوريا الثوري</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              أول تطبيق جزائري مدعوم بالذكاء الاصطناعي للباكالوريا. 
              <span className="text-cyan-400 font-bold"> كل ما تحتاجه للنجاح</span> في مكان واحد
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button 
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-purple-500/25 hover:shadow-cyan-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white ml-3"></div>
                      جاري التحميل...
                    </>
                  ) : (
                    <>
                      <Download className="w-6 h-6 ml-3 group-hover:animate-bounce" />
                      تحميل APK (13 MB)
                    </>
                  )}
                </div>
              </button>
              
              <button className="group border-2 border-cyan-400/50 text-cyan-300 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center backdrop-blur-xl">
                <Play className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                شاهد العرض التوضيحي
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-reverse space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 ml-2 text-green-400" />
                آمن 100%
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 ml-2 text-blue-400" />
                +10,000 طالب
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 ml-2 text-purple-400" />
                تحديثات مستمرة
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">تصميم مستقبلي</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              واجهة عصرية وذكية تجعل التعلم تجربة ممتعة ومثيرة
            </p>
          </div>
          
          <div className="flex justify-center relative">
            <div className="relative group">
              {/* Background phones for depth */}
              <div className="absolute -top-4 -right-4 w-80 h-[500px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-[3rem] transform rotate-12 blur-sm"></div>
              <div className="absolute -top-2 -right-2 w-80 h-[500px] bg-gradient-to-br from-cyan-600/30 to-purple-600/30 rounded-[3rem] transform rotate-6 blur-sm"></div>
              
              {/* Main phone */}
              <div className="relative w-80 h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] shadow-2xl shadow-purple-500/25 border border-gray-700/50 p-6 group-hover:scale-105 transition-transform duration-500">
                {/* Phone header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-reverse space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-4000"></div>
                  </div>
                  <Smartphone className="w-6 h-6 text-gray-400" />
                </div>
                
                {/* Phone content */}
                <div className="text-white space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SmartBacDz</h3>
                    <p className="text-gray-400 text-sm">مرحباً بك في المستقبل</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-4 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                      <div className="flex items-center">
                        <Bot className="w-6 h-6 ml-3 text-cyan-400" />
                        <div>
                          <span className="font-bold text-white">مساعد ذكي</span>
                          <p className="text-xs text-gray-400">AI متطور</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-4 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                      <div className="flex items-center">
                        <FileText className="w-6 h-6 ml-3 text-purple-400" />
                        <div>
                          <span className="font-bold text-white">مواضيع شاملة</span>
                          <p className="text-xs text-gray-400">2010-2025</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl p-4 backdrop-blur-xl border border-pink-500/30 hover:border-pink-400/50 transition-colors">
                      <div className="flex items-center">
                        <Video className="w-6 h-6 ml-3 text-pink-400" />
                        <div>
                          <span className="font-bold text-white">فيديوهات HD</span>
                          <p className="text-xs text-gray-400">شرح مفصل</p>
                        </div>
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
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">مميزات ثورية</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              تقنيات متطورة ومميزات حصرية لضمان تفوقك في الباكالوريا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">مساعد ذكي متطور</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                نموذج ذكاء اصطناعي من الجيل الجديد يفهم أسئلتك ويقدم إجابات دقيقة ومفصلة لكل المواد
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">أرشيف شامل 2010-2025</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                مكتبة ضخمة تضم جميع مواضيع الباكالوريا مع الحلول النموذجية والتصحيحات المفصلة
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">فيديوهات عالية الجودة</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                شروحات مرئية بجودة HD من أفضل الأساتذة مع تقنيات تعليمية حديثة وتفاعلية
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">منظم ذكي للوقت</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                نظام تخطيط متقدم يحلل أداءك ويضع جدولاً مخصصاً لتحقيق أفضل النتائج
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">اختبارات تكيفية</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                نظام اختبارات ذكي يتكيف مع مستواك ويركز على نقاط الضعف لتحسين مستمر
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/25">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">نظام الإنجازات</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                تحديات يومية وشارات تحفيزية تجعل التعلم أكثر متعة وتشويقاً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-[3rem] p-16 border border-gray-700/50 shadow-2xl shadow-purple-500/25">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ابدأ رحلة التفوق الآن
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              انضم إلى آلاف الطلاب الذين حققوا النجاح باستخدام SmartBacDz. 
              <span className="text-cyan-400 font-bold"> التحميل مجاني بالكامل</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <button 
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-purple-500/25 hover:shadow-cyan-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white ml-4"></div>
                      جاري التحميل...
                    </>
                  ) : (
                    <>
                      <Download className="w-7 h-7 ml-4 group-hover:animate-bounce" />
                      تحميل SmartBacDz APK
                      <span className="text-sm opacity-75 mr-2">(13 MB)</span>
                    </>
                  )}
                </div>
              </button>
              
              <button className="group border-2 border-cyan-400/50 text-cyan-300 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center backdrop-blur-xl">
                <Play className="w-7 h-7 ml-4 group-hover:scale-110 transition-transform" />
                مشاهدة العرض التوضيحي
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center text-gray-400">
                <Shield className="w-5 h-5 ml-2 text-green-400" />
                <span>آمن ومضمون 100%</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <Smartphone className="w-5 h-5 ml-2 text-blue-400" />
                <span>يتطلب Android 5.0+</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <Download className="w-5 h-5 ml-2 text-purple-400" />
                <span>تحديثات مجانية مدى الحياة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">1500+</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors">درس وملخص شامل</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">15</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors">سنة من المواضيع</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-3">800+</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors">فيديو تعليمي HD</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">24/7</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors">مساعد ذكي متاح</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-reverse space-x-4 mb-6 md:mb-0">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SmartBacDz APK</h3>
                <p className="text-gray-400 font-medium">تطبيق الباكالوريا الذكي للطلاب الجزائريين</p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-medium">
                جميع الحقوق محفوظة © 2024 SmartBacDz
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-500 font-medium">
              مصمم بعناية للطلاب الجزائريين • مدعوم بأحدث تقنيات الذكاء الاصطناعي • الإصدار الأول
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
