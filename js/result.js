const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');

/////// 카카오 공유 코드 ////////

const kakaoShare = document.querySelector('.kakao_share');
Kakao.init('JavaScript 키를 입력하세요');
// Kakao.isInitialized();

function sendLink() {
    let result_url = window.location.href;
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '나의 개발 유형은?',
            description: '나에게 꼭 맞는 개발 유형을 알아보자!!',
            imageUrl: 'https://mbit.weniv.co.kr/static/img/mbit_thumbnail.png',
            link: {
                mobileWebUrl: 'https://mbit.weniv.co.kr',
                webUrl: 'https://mbit.weniv.co.kr',
            },
        },
        social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
        },
        buttons: [
        {
            title: '결과 보러가기',
            link: {
                webUrl: result_url,
                mobileWebUrl: result_url,
            },
        },
        {
            title: '테스트 하러가기',
            link: {
                webUrl: 'https://mbit.weniv.co.kr',
                mobileWebUrl: 'https://mbit.weniv.co.kr',
            },
        },
        ],
    });
}

/////// 카카오 공유 코드 끝 ////////

$(function(){
    let url = window.location.href;
    let img = $('.result_img img').attr('src');

    $("meta[property='og\\:url']").attr('content', url);
    $("meta[property='og\\:image']").attr('content', img);
});

function copyUrl(){
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

function sharefacebook(){
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

copyBtn.addEventListener('click', copyUrl);
facebookShare.addEventListener('click', sharefacebook)

/////// 카카오 공유 코드 ////////

kakaoShare.addEventListener('click', sendLink)