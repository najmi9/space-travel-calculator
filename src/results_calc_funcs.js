const calculateNewtonStop = (d, a, m) => {
    const T = () => (2*Math.sqrt(d/a));
    const V = () => (Math.sqrt(a * d));
    const F = () =>((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    const KE = () =>(m * a * d / 2);
    const FE = () => F() * c * c;
    return { 'T':T(), 'V':V(), 'F':F(), 'KE':KE(), 'FE':FE() };
}

const calculateNewtonSpeed = (d, a, m) => {
    const T = () => (Math.sqrt(2 * d / a));
    const V = () => (Math.sqrt(2 * a * d));
    const F = () => ((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    const KE =  () =>(m * a * d );
    const FE = () => F() * c * c;
   return { 'T':T(), 'V':V(), 'F':F(), 'KE':KE(), 'FE':FE() };
}

const calculateEinsteinSpeed = (d, a, m) => {
    const T = () => Math.sqrt((d * d / (c * c) + 2 * d / a));
    const V = () => (a * T()) / Math.sqrt(1 + (a * T() / c) * (a * T() / c))
    const t = () => c / a * Math.acosh(a * d / (c * c) + 1);
    const F = () => m * (Math.exp(a * t() / c) - 1)
    const beta = () => V()/c;
    const gamma = ()=> 1/Math.sqrt(1-(beta()*beta()));
    const KE =  () => ( m*c*c * (gamma() - 1));
    const FE = () => F() * c * c;
    return {'T':T(), 't':t(), 'V':V(), 'F':F(), 'KE':KE(), 'FE':FE(), 'beta':beta(), 'gamma':gamma()}
}

const catculateEinsteinStop = (d, a, m) => {
    const T = () => Math.sqrt((d * d / (c * c) + 4 * d / a));
    const V = () => (a * T()) / (2 * Math.sqrt(1 + (a * T() / (2*c)) * (a * T() / (2*c))))
    const t = () => 2 * c / a * Math.acosh((a * d /(2* (c * c))) + 1);
    const F = () => m * (Math.exp(a * t() / c) - 1);
    const beta = () => V()/c;
    const gamma = ()=> 1/Math.sqrt(1-(beta()*beta()));
    const KE =  () => (m*c*c * (gamma() - 1));
    const FE = () => F() * c * c;
    return {'T':T(), 't':t(), 'V':V(), 'F':F(), 'KE':KE(), 'FE':FE(), 'beta':beta(), 'gamma':gamma()}
}

