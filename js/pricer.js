function calculate() {
    let opLogo = document.getElementById('op-logo').checked
    let opShorts = document.getElementById('op-shorts').checked
    let opCols = document.getElementById('op-colors').selectedIndex
    let opCount = +document.getElementById('op-count').value
    let ans = 2000
    if (opLogo) ans += 500
    if (opShorts) ans += 1200
    ans += opCols*300;
    ans *= opCount
    document.getElementById('ans').innerHTML = ans;
}