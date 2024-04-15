// 定義梯度函數
function gradient(f, p) {
    const h = 1e-6;  // 微小的步長，用於數值微分
    const grad = [];  // 初始化梯度向量

    // 計算每個維度的偏導數
    for (let i = 0; i < p.length; i++) {
        const p_plus_h = p.slice();
        p_plus_h[i] += h;
        const p_minus_h = p.slice();
        p_minus_h[i] -= h;

        // 數值微分（中心差分）
        const df_dx_i = (f(p_plus_h) - f(p_minus_h)) / (2 * h);
        grad.push(df_dx_i);
    }

    return grad;
}

// 範例用法：
function f(p) {
    // 假設 f(x, y) = x^2 + y^2
    const [x, y] = p;
    return x**2 + y**2;
}

const p = [1, 2];  // 範例點
const grad_f = gradient(f, p);
console.log(`在點 ${p} 上的梯度：${grad_f}`);
