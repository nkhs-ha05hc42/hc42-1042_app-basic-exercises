const createRecord = async (inputBody) => {
    const fetchResult = await fetch("http://localhost:3000/api/sample2", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(inputBody),
    })
    const responsce = await fetchResult.json()
    if (responsce.status !== "success") {
    throw new Error(responsce.status)
    }
    alert("登録が完了しました！")
    }
    const getFormData = () => {
    const inputFormElement = document.getElementById("input-form").elements
    const id = parseInt(inputFormElement.id.value)
    const name = inputFormElement.name.value
    const age = parseInt(inputFormElement.age.value)
    const postcode = parseInt(inputFormElement.postcode.value)
    const address = inputFormElement.address.value
    const average_score = parseInt(inputFormElement.average_score.value)
    if (!id) {
    throw new Error("IDは必須です")
    }
    if (!name) {
    throw new Error("名前は必須です")
    }
    if (!age) {
    throw new Error("Ageは必須です")
    }
    if (!postcode) {
    throw new Error("Postcodeは必須です")
    }
    if (!address) {
    throw new Error("Addressは必須です")
    }
    if (!average_score) {
    throw new Error("AverageScoreは必須です")
    }
    return {
    id,
    name,
    age,
    postcode,
    address,
    average_score
    }
    }
    const clearFormData = () => {
    const inputFormElement = document.getElementById("input-form").elements
    inputFormElement.id.value = ""
    inputFormElement.name.value = ""
    inputFormElement.age.value = ""
    inputFormElement.postcode.value = ""
    inputFormElement.address.value = ""
    inputFormElement.average_score.value = ""
    }
    /**
    * ウィンドウ読み込み時の処理
    */
    window.onload = () => {
    const createButtonElement = document.getElementById("create-button")
    createButtonElement.addEventListener(
    "click",
    async () => {
    try {
    const intutBody = getFormData()
    await createRecord(intutBody)
    clearFormData()
    } catch (err) {
    alert(err)
    }
    },
    false,
    )
    }