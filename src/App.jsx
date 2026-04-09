import React, { useState } from 'react';
import { 
  ChevronRight, 
  MapPin, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  Search, 
  ArrowRight,
  Users,
  Building2,
  Clock
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('instructor');

  // CTA 핸들러
  const handleJobBrowse = () => {
    window.location.href = 'https://fitjob.co.kr/';
  };

  const handlePostJob = () => {
    window.location.href = 'https://fitjob.co.kr/write';
  };

  // 가이드라인을 완벽 준수한 로고 컴포넌트 (색상 강제 고정)
  const Logo = ({ className = "", height = "32px", style = {} }) => (
    <img 
      src="/logo.png" 
      alt="FITJOB" 
      className={`cursor-pointer ${className}`}
      style={{ height, width: 'auto', ...style }}
      onClick={() => window.location.href = 'https://fitjob.co.kr/'}
    />
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-pretendard selection:bg-brand-light">
      {/* 1. Header (Minimal) */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center sm:justify-between">
          <Logo />
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] text-[#5C5FED] text-sm font-bold mb-6 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5C5FED] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5C5FED]"></span>
            </span>
            필라테스 · 피트니스 간편 채용 플랫폼
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.2] mb-6 tracking-tight">
            운동 업계, 이제는 <br/>
            <span style={{ color: '#5C5FED' }}>핏잡</span>에서 연결하세요
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            강사도, 센터도 가장 빠르게 만나는 방법<br className="hidden md:block"/>
            복잡한 절차 없이 오늘 바로 딱 맞는 파트너를 찾으세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleJobBrowse}
              style={{ backgroundColor: '#5C5FED' }}
              className="px-8 py-4 text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-[#5C5FED]/20 flex items-center justify-center gap-2 group"
            >
              지금 공고 보러가기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handlePostJob}
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              무료로 공고 등록하기
            </button>
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">혹시 이런 고민 중이신가요?</h2>
          
          <div className="flex p-1 bg-slate-200 rounded-xl mb-8">
            <button 
              onClick={() => setActiveTab('instructor')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${activeTab === 'instructor' ? 'bg-white shadow-sm' : 'text-slate-500'}`}
              style={activeTab === 'instructor' ? { color: '#5C5FED' } : {}}
            >
              강사님
            </button>
            <button 
              onClick={() => setActiveTab('center')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${activeTab === 'center' ? 'bg-white shadow-sm' : 'text-slate-500'}`}
              style={activeTab === 'center' ? { color: '#5C5FED' } : {}}
            >
              센터 담당자님
            </button>
          </div>

          <div className="space-y-4">
            {activeTab === 'instructor' ? (
              <>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold">Q</span>
                  </div>
                  <p className="text-slate-700 font-medium">"여러 채용사이트 돌아다니면서 지원하는 게 너무 번거로워요."</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold">Q</span>
                  </div>
                  <p className="text-slate-700 font-medium">"지원한 공고를 어디까지 했는지 관리가 안돼요."</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold">Q</span>
                  </div>
                  <p className="text-slate-700 font-medium">"공고 작성이 번거롭고 매번 비슷한 내용을 반복 입력해야 해요."</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold">Q</span>
                  </div>
                  <p className="text-slate-700 font-medium">"지원자는 많은데, 관리하고 선별하는 데 시간이 너무 많이 들어요."</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. Solution Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">걱정 마세요, 핏잡이 해결합니다</h2>
            <p className="text-slate-500">운동 업계 특화 기능으로 더 효율적인 채용 문화를 만듭니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 솔루션 1: 한 번에 지원 */}
            <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-2 transition-all duration-300">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: '#EEF0FF' }}
              >
                <CheckCircle2 className="w-7 h-7 transition-all duration-300" style={{ color: '#5C5FED' }} />
              </div>
              <h3 className="text-xl font-bold mb-3">한 번에 지원, 빠르게 끝내기</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                여러 사이트 돌아다닐 필요 없이<br/>한 곳에서 바로 지원하고 관리하세요.
              </p>
            </div>

            {/* 솔루션 2: 맞춤형 필터링 */}
            <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-2 transition-all duration-300">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: '#EEF0FF' }}
              >
                <Search className="w-7 h-7 transition-all duration-300" style={{ color: '#5C5FED' }} />
              </div>
              <h3 className="text-xl font-bold mb-3">맞춤형 필터링</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                필라테스, 헬스, 요가 등 직군별/근무 형태별로 나에게 맞는 조건만 필터링하세요.
              </p>
            </div>

            {/* 솔루션 3: 실시간 채팅 */}
            <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100/50 hover:-translate-y-2 transition-all duration-300">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: '#EEF0FF' }}
              >
                <MessageSquare className="w-7 h-7 transition-all duration-300" style={{ color: '#5C5FED' }} />
              </div>
              <h3 className="text-xl font-bold mb-3">실시간 채팅 연결</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                번거로운 이메일 대신 앱 내 채팅으로 센터와 직접 소통하고 면접을 잡으세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">단 1분 만에 시작하는 매칭</h2>
            <p className="text-slate-400">간단한 단계로 원하는 파트너를 찾을 수 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { icon: <Search/>, title: "조건 선택", desc: "지역, 시간, 급여 선택" },
              { icon: <Building2/>, title: "공고 확인", desc: "검증된 센터 정보 탐색" },
              { icon: <CheckCircle2/>, title: "바로 지원", desc: "프로필 하나로 지원 끝" },
              { icon: <MessageSquare/>, title: "채팅 연결", desc: "센터장과 직접 소통" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 text-center p-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {React.cloneElement(step.icon, { className: "w-8 h-8", style: { color: '#5C5FED' } })}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-14 left-full w-full h-[2px] bg-gradient-to-r from-[#5C5FED]/50 to-transparent -ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Feature Highlights (Short) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-[#EEF0FF] text-[#5C5FED] rounded-lg text-sm font-bold mb-4">
              센터 전용 기능
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              공고 등록, <br/> 
              <span style={{ color: '#5C5FED' }}>60초면 충분합니다.</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center text-slate-600 font-medium">
                <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                복잡한 양식 없는 스마트 공고 시스템
              </li>
              <li className="flex gap-3 items-center text-slate-600 font-medium">
                <Users className="w-5 h-5" style={{ color: '#5C5FED' }} />
                적합한 강사 추천 알고리즘 제공
              </li>
              <li className="flex gap-3 items-center text-slate-600 font-medium">
                <Clock className="w-5 h-5 text-emerald-500" />
                지원 알림으로 놓치지 않는 인재 영입
              </li>
            </ul>
            <button 
              onClick={handlePostJob}
              style={{ border: '2px solid #5C5FED', color: '#5C5FED' }}
              className="mt-10 px-6 py-3 rounded-xl font-bold hover:bg-[#5C5FED] hover:text-white transition-all flex items-center gap-2"
            >
              지금 공고 무료로 올리기
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-slate-100 rounded-[2.5rem] p-8 aspect-square flex items-center justify-center relative">
            <div className="w-full h-full bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 border border-slate-200 animate-pulse">
               <div className="h-6 w-1/3 bg-slate-200 rounded"></div>
               <div className="h-4 w-full bg-slate-100 rounded"></div>
               <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
               <div 
                 className="mt-auto h-12 w-full rounded-xl border border-[#5C5FED]/30 flex items-center justify-center font-bold text-sm"
                 style={{ backgroundColor: '#EEF0FF', color: '#5C5FED' }}
               >
                 공고 등록 완료
               </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5C5FED]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 px-6">
        <div 
          className="max-w-3xl mx-auto rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#5C5FED' }}
        >
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">
            지금 바로 핏잡에서<br/>새로운 시작을 하세요.
          </h2>
          <p className="text-blue-100 mb-10 relative z-10 opacity-90">
            벌써 수많은 센터와 강사님이 <br className="md:hidden"/> 핏잡을 통해 연결되고 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button 
              onClick={handleJobBrowse}
              className="px-8 py-4 bg-white text-brand rounded-2xl font-bold text-lg hover:shadow-xl transition-all"
              style={{ color: '#5C5FED' }}
            >
              공고 보러가기
            </button>
            <button 
              onClick={handlePostJob}
              className="px-8 py-4 bg-black/20 text-white rounded-2xl font-bold text-lg hover:bg-black/30 transition-all border border-white/20"
            >
              공고 등록하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <Logo className="opacity-80 grayscale" />
          <p className="text-slate-400 text-sm text-center">
            &copy; 2026 핏잡. All rights reserved.<br/>
            운동 업계 채용 문화를 혁신하는 피트니스 잡 매칭 서비스
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
