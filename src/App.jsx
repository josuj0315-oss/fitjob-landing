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

import Section6Image from './assets/이미지.png';

const App = () => {
  const [activeTab, setActiveTab] = useState('instructor');
  const [showModal, setShowModal] = useState(false);

  // CTA 핸들러
  const handleJobBrowse = () => {
    window.location.href = 'https://fitjob.co.kr/';
  };

  const handleComingSoon = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  // 가이드라인을 완벽 준수한 로고 컴포넌트 (색상 강제 고정)
  const Logo = ({ className = "", height = "22px", style = {} }) => (
    <img
      src="/FitJob2.png"
      alt="FITJOB"
      className={`cursor-pointer ${className}`}
      style={{ height, width: 'auto', ...style }}
      onClick={() => window.location.href = 'https://fitjob.co.kr/'}
    />
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-pretendard selection:bg-brand-light relative">
      {/* Modal / Toast */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10 max-w-sm w-full text-center animate-in fade-in zoom-in duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">핏잡 앱이 곧 출시됩니다!</h3>
            <p className="text-slate-600">조금만 기다려주세요 🙏</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full py-3 bg-[#5C5FED] text-white rounded-xl font-bold"
            >
              확인
            </button>
          </div>
        </div>
      )}

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
            운동 업계, 이제는 <br />
            <span style={{ color: '#5C5FED' }}>핏잡</span>에서 빠르게 채용하세요
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            강사도, 센터도 가장 빠르게 만나는 방법<br />
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
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold">Q</span>
                  </div>
                  <p className="text-slate-700 font-medium">"여러 채용사이트 돌아다니면서 지원하는 게 너무 번거로워요."</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold">Q</span>
                  </div>
                  <p className="text-slate-700 font-medium">"지원한 공고를 어디까지 했는지 관리가 안돼요."</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold">Q</span>
                  </div>
                  <p className="text-slate-700 font-medium">"공고 작성이 번거롭고 매번 비슷한 내용을 반복 입력해야 해요."</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-center">
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
                여러 사이트 돌아다닐 필요 없이<br />한 곳에서 바로 지원하고 관리하세요.
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
              { icon: <Search />, title: "조건 선택", desc: "지역, 시간, 직군, 근무형태 선택" },
              { icon: <Building2 />, title: "공고 확인", desc: "검증된 센터 정보 탐색" },
              { icon: <CheckCircle2 />, title: "바로 지원", desc: "프로필 하나로 지원 끝" },
              { icon: <MessageSquare />, title: "채팅 연결", desc: "센터장과 직접 소통" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 text-center p-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {React.cloneElement(step.icon, { className: "w-8 h-8", style: { color: '#5C5FED' } })}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400">{step.desc}</p>
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
              공고등록, <br />
              <span style={{ color: '#5C5FED' }}>AI자동채우기로 등록해보세요!</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center text-slate-600 font-medium">
                <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                복잡한 입력 없이 완성되는 스마트 공고
              </li>
              <li className="flex gap-3 items-center text-slate-600 font-medium">
                <Users className="w-5 h-5" style={{ color: '#5C5FED' }} />
                간편하게 공고를 등록하고 바로 모집하세요
              </li>
              <li className="flex gap-3 items-center text-slate-600 font-medium">
                <Clock className="w-5 h-5 text-emerald-500" />
                지원 알림으로 놓치지 않고 확인하세요
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-[2.5rem] p-8 aspect-square flex items-center justify-center relative">
            <img
              src={Section6Image}
              alt="공고 등록 프로세스"
              className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
            />
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5C5FED]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA - App Coming Soon */}
      <section className="py-24 px-6">
        <div
          className="max-w-4xl mx-auto rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#5C5FED' }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight break-keep">
              핏잡 앱, 곧 출시됩니다<br />
              <span className="text-blue-200">더 빠르고 간편한 매칭을 준비 중이에요</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-12 opacity-90 max-w-2xl mx-auto break-keep">
              센터와 강사를 연결하는 모든 과정을<br className="md:hidden" /> 이제 앱 하나로 해결하세요.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 inline-block w-full max-w-xl border border-white/20">
              <p className="text-xl font-bold mb-6 break-keep">앱 출시를 준비 중입니다<br />조금만 기다려주세요 🙌</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleComingSoon}
                  className="flex-1 px-4 py-4 bg-white text-slate-900 rounded-2xl font-bold text-base md:text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                >
                  <span className="text-xl md:text-2xl">🍎</span> iOS 출시 예정
                </button>
                <button
                  onClick={handleComingSoon}
                  className="flex-1 px-4 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base md:text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                >
                  <span className="text-xl md:text-2xl">🤖</span> Android 출시 예정
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <Logo className="opacity-80 grayscale" />
          <p className="text-slate-400 text-sm text-center">
            &copy; 2026 핏잡. All rights reserved.<br />
            운동 업계 채용 문화를 혁신하는 피트니스 잡 매칭 서비스
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
