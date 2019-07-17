//这是对于100人，转圈报数的题目的算法实现

//为了显示通用性，将写一个通用的函数，到时将规则里面的特殊数字通过变量传进函数中

const turn = (max, params) => {
    const ruleObj = {
        1: 'Fizz',
        2: 'Buzz',
        3: 'FizBuzz'
    }
    let res = []
    const c1 = params[0]
    const c2 = params[1]
    for (var i = 1; i < Number(max); i++) {
        let r1 = isDev(i, c1, c2)
        let r2 = ifInDev(i, c1, c2)
        if (r1) {
            res.push(ruleObj[r1])
        }
        else if (r2) {
            res.push(ruleObj[r2])
        }
        else {
            res.push(i)
        } 
    }
    res.forEach(item => {
        console.log(item)
    })
}   

//写两个工具函数

// 判断 m 能否被 n 整除或者能否被 n 和 q 的乘积整除
const isDev = (m, n, q) => {
    if (m % (n * q) === 0) {
        return 3
    }
    if (m % n === 0 ) {
        return 1
    }
    if (m % n === 0) {
        return 2
    }
    return 
}

// 判断 m 中是否含有 n 

const ifInDev = (m, n, q) => {
    if ( m === n || ifIn(m, n)) {
        return 1
    }
    if ( m === q || ifIn(m, q)) {
        return 2
    }
    return
}

// 真正的工具，判断是否在其中的函数

const ifIn = ( u, i) => {
    return u - (parseInt( u / 10) * 10) === i && parseInt( u / 10) === i ? true : false
}

turn(100, [3, 5])