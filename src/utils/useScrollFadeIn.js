import { useRef, useCallback, useEffect } from 'react'

const useScrollFadeIn = () => {
  const dom = useRef(); // Animation 트리거 이벤트를 DOM에 지정하기 위해서 사용

  const handleScroll = useCallback(([entry]) => {
    /// entry == InterSectionObserverEntry의 인스턴스 배열..이라고 함
    const { current } = dom;

    if(entry.isIntersecting) { //entry의 교차상태..? TODO:이게뭐지
      current.style.transitionProperty = 'opacity transform';
      current.style.transitionDuration = '1s';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = '0s';
      current.style.opacity = 1;
      current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
      // 동작하게 할 함수, Observer 세팅값(thresshold는 TargetElement의 노출비율로 0.7은 70%가 노출되었을때 이벤트 발생, 값은 number나 Array로, Default는 0)
      observer.observe(current); // current 요소의 관찰을 시작

      return () => observer && observer.disconnect(); // observer가 true면 관찰중지
    }
  }, [handleScroll])
  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: 'translate3d(0,50%,0)',
    }
  }
}

export default useScrollFadeIn;
