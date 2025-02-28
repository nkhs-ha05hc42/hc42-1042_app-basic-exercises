const specifiedNumberOfStarsView = (count) => {
    if (count >= 101) return // ここが処理の肝となる終了条件
    console.log(count)
    specifiedNumberOfStarsView(count * 2)
}

specifiedNumberOfStarsView(10)
specifiedNumberOfStarsView(25)
