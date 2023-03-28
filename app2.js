$(document).ready(function () {
    let huou = 0
    let bau = 0
    let ga = 0
    let ca = 0
    let cua = 0
    let tom = 0
    
    let arrCheck = []
   
   
    let arrSuccess =[]
    $(".list-item:nth-child(1)").on("click", function () {
        if (huou === 0) {
            huou = 1;
            $(this).text(huou)
            arrCheck.push("hươu")
        } else {
            huou = 0
            $(this).text("")
           arrCheck= arrCheck.filter(item => item !== "hươu")
        }

        
    })
    $(".list-item:nth-child(2)").on("click", function () {
        if (bau === 0) {
            bau = 1;
            $(this).text(bau)
            arrCheck.push("bầu")

        } else {
            bau = 0
            $(this).text("")
           arrCheck= arrCheck.filter(item => item !== "bầu")
        }
    })
    $(".list-item:nth-child(3)").on("click", function () {
        if (ga === 0) {
            ga = 1;
            $(this).text(ga)
            arrCheck.push("gà")

        } else {
            ga = 0
            $(this).text("")
           arrCheck= arrCheck.filter(item => item !== "gà")

        }
    })
    $(".list-item:nth-child(4)").on("click", function () {
        if (ca === 0) {
            ca = 1;
            $(this).text(ca)
            arrCheck.push("cá")

        } else {
            ca = 0
            $(this).text("")
           arrCheck= arrCheck.filter(item => item !== "cá")

        }
    })
    $(".list-item:nth-child(5)").on("click", function () {
        if (cua === 0) {
            cua = 1;
            $(this).text(cua)
            arrCheck.push("cua")

        } else {
            cua = 0
            $(this).text("")
           arrCheck= arrCheck.filter(item => item !== "cua")

        }
    })
    $(".list-item:nth-child(6)").on("click", function () {
        if (tom === 0) {
            tom = 1;
            $(this).text(tom)
            arrCheck.push("tôm")

        } else {
            tom = 0
            $(this).text("")
           arrCheck= arrCheck.filter(item => item !== "tôm")

        }
    })
    $(".btn-random").on("click", function () {
        $(".rand-container").toggleClass('animation')
        let arr = ['hươu', "bầu", "gà", "cá", "cua", "tôm"]
        let newArr = ["<div class='fill'></div>"]

        for (let i = 0; i < 3; i++) {
            let rand = Math.floor(Math.random() * 6)
            newArr.push(`<div class=rand-item>${arr[rand]}</div>`)
            arrCheck.forEach(item=>{
                if (item == arr[rand]) {
                    arrSuccess.push(`<h3>${item}</h3>`)
                }
            })
        }
        $(".rand-container").html(newArr)
      
       
            
    })
    $('.btn-open').on('click',function(){
        $('.fill').toggleClass("hidden");
        if(arrSuccess.length > 0){
            setTimeout(()=>{
                $(".alert-items").toggleClass("show")
                $('.alert-item').html(`<h2>chúc mừng bạn đã đoán trúng:</h2>
                       ${arrSuccess.join("")}     
                `)
                
            },1000)
        }else{
            $('.alert-item').html(`<h2>Không trúng gì cả =))</h2> `)
        }
    })
    $('.btn-close').on("click",function(){
        $(".alert-items").removeClass("show")
        setTimeout(()=>{
            location.reload();
        },1000)
       
    })
    
})