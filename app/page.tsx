'use client';

import { 
  useCallback,
  useEffect, 
  useRef, 
  useState 
} from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Home() {
	const [scroll, setScroll] = useState(0);
  
  const targetRef = useRef<HTMLDivElement>(null);

	const onScroll = useCallback(() => {
		const { scrollY } = window;
    setScroll(scrollY);
	}, []);

  useEffect(() => {
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [onScroll]);


  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    }

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < scroll) {
          const target = entry.target as HTMLDivElement;
          target.style.opacity = "1";
          target.style.bottom = "0";
          // 타겟 엘리먼트에 대한 관찰을 중지하려면 활성화.
          observer.unobserve(entry.target); 
        }
      })
    }, observerOptions);

    const children = (targetRef.current as HTMLDivElement).children as HTMLCollection;
    for (const item of Array.from(children)) {
      io.observe(item);
    };
  }, [targetRef]);

  return (
    <main>
      <div>
        <header className="w-full h-[60px] bg-slate-300"></header>
        <section className="w-full h-[958px] bg-slate-500"></section>
        <section className="w-full h-[1238px] bg-zinc-300"></section> 
        <section className="w-full h-[2083px] bg-amber-200">
          <div className="max-w-7xl py-[140px]	px-10 mx-auto">
            <h2>안심철거란?</h2>
            <p className="mb-20">안전한 대금 처리와 일정 준수, 확실한 결과를 보장받는 철거 서비스</p>
            <div ref={targetRef} className="grid grid-cols-2 grid-rows-[520px] gap-5">
              <div className={clsx(
                'relative',
                '-bottom-36',
                'h-[520px]',
                'bg-slate-100',
                'opacity-0',
                'transition-all',
                'ease-out',
                'duration-[850ms]',
              )}></div>
              <div className={clsx(
                'relative',
                '-bottom-36',
                'h-[520px]',
                'bg-slate-200',
                'opacity-0',
                'transition-all',
                'ease-out',
                'duration-[850ms]',
              )}></div>
              <div className={clsx(
                'relative',
                '-bottom-36',
                'h-[520px]',
                'bg-slate-300',
                'opacity-0',
                'transition-all',
                'ease-out',
                'duration-[850ms]',
              )}></div>
              <div className={clsx(
                'relative',
                '-bottom-36',
                'h-[520px]',
                'bg-slate-400',
                'opacity-0',
                'transition-all',
                'ease-out',
                'duration-[850ms]',
              )}></div>
              <div className={clsx(
                'relative',
                '-bottom-36',
                'h-[520px]',
                'bg-slate-500',
                'opacity-0',
                'transition-all',
                'ease-out',
                'duration-[850ms]',
              )}></div>
              <div className={clsx(
                'relative',
                '-bottom-36',
                'h-[520px]',
                'bg-slate-600',
                'opacity-0',
                'transition-all',
                'ease-out',
                'duration-[850ms]',
              )}></div>
            </div>
          </div>
        </section>
        <section className={clsx(
          'flex',
          'items-center',
          'justify-center',
          'gap-[159px]',
          'h-[900px]',
          'bg-orange-200',
          'text-center',
        )}>
          <div className={clsx(
            'w-[404px]',
            'h-full'
          )}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={clsx(
            'py-[282px]'
          )}>
            <h2 className="mb-20">어떻게 최저가 철거가 가능한가요?</h2>
          </div>
        </section>
        {/* 좌우 무한 슬라이드 Section */}
        <section className={clsx(
          'h-[710px]',
          'bg-violet-200',
          'text-center',
          'overflow-hidden',
          'py-[140px]',
        )}>
          <h2 className="mb-20">이미 기업들은 최저가 안심철거로 사업을 확장하고 앞서가고 있어요</h2>
          {/* 슬라이드 first line */}
          <div className={clsx(
            'flex',
            'gap-8',
            'w-fit',
            'animate-infinite-slide',
            'mb-8'
          )}>
            {/* 슬라이드 group 1 */}
            <ul className={clsx(
              'flex',
              'gap-8'
            )}>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>1</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>2</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>3</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>4</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>5</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>6</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>7</li>
            </ul>

            {/* 슬라이드 group 2 */}
            <ul className={clsx(
              'flex',
              'gap-8'
            )}>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>1</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>2</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>3</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>4</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>5</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>6</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>7</li>
            </ul>
          </div>

          {/* 슬라이드 second line */}
          <div className={clsx(
            'flex',
            'gap-8',
            'w-fit',
            'animate-infinite-slide-back'
          )}>
            {/* 슬라이드 group 1 */}
            <ul className={clsx(
              'flex',
              'gap-8'
            )}>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>1</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>2</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>3</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>4</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>5</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>6</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>7</li>
            </ul>

            {/* 슬라이드 group 2 */}
            <ul className={clsx(
              'flex',
              'gap-8'
            )}>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>1</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>2</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>3</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>4</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>5</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>6</li>
              <li className={clsx(
                'flex',
                'justify-center',
                'items-center',
                'w-[238px]',
                'h-[90px]',
                'bg-violet-400'
              )}>7</li>
            </ul>
          </div>
        </section>
        <footer className={clsx(
            'w-full', 
            'h-[188px]',
            'bg-zinc-800'
          )
        }>
        </footer>
        
        {/* 플로팅 버튼 */}
        <div className={twMerge(
          clsx(
            'fixed',
            'right-[40px]',
            'bottom-[60px]',
            'flex',
            'justify-center',
            'items-center',
            'w-[259px]', 
            'h-[216px]',
            'bg-slate-800',
            'rounded-xl',
            'text-2xl	',
            'text-white',
            'invisible',
            'opacity-0',
            'transition-all',
            'duration-200',
          ), 
          clsx({
            'right-[60px] opacity-100 visible': scroll > 1393,
          }))
        }>{`I'm 플로팅 버튼`}</div>
      </div>
    </main>
  );
}
