import React, { useState , useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl ,isLargeRow}){
    const [movies , setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [] , run once when row loads and dont load again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
        height: "390",
        width: "100%",
            //https://developers.google.com/yputube/player_parameters
        playerVars: {
            autoplay: 1,
        },
    };

    var names={63174 : "https://www.youtube.com/watch?v=3mTh2joPPj8" , 77169 : "https://www.youtube.com/watch?v=MLpyi-oVoIY" , 75006 : "https://www.youtube.com/watch?v=0DAmWHxeoKw" , 81354 : "https://www.youtube.com/watch?v=ZU9ZtlkSnnE" , 71446 : "https://www.youtube.com/watch?v=ZAXA1DV4dtI" ,
    105214: "https://www.youtube.com/watch?v=RaJtl46ADRU"  , 70523 : "https://www.youtube.com/watch?v=cq2iTHoLrt0"  , 93741 : "https://www.youtube.com/watch?v=CRTIrK3Kku8"  , 76669 : "https://www.youtube.com/watch?v=QNwhAdrdwp0" ,66732 : "https://www.youtube.com/watch?v=b9EkMc79ZSU" ,
    70785 : "https://www.youtube.com/watch?v=qMlQz57mbc8" , 109616 : "https://www.youtube.com/watch?v=CynWJbREA8g" , 76719 : "https://www.youtube.com/watch?v=st6r-8mLW_o" , 81356 : "https://www.youtube.com/watch?v=qZhb0Vl_BaM"  , 90660 : "https://www.youtube.com/watch?v=CNuY4ymi4Fs" ,
    89233 : "https://www.youtube.com/watch?v=3f_REapPwio" , 66788 : "https://www.youtube.com/watch?v=toj3CyMhBOs" , 89641 : "https://www.youtube.com/watch?v=8sXTfzaLmiQ" , 106754 : "https://www.youtube.com/watch?v=N29w7aldHpM" , 104555 : "https://www.youtube.com/watch?v=ajsQFpny7tY" ,
    497582 : "https://www.youtube.com/watch?v=1d0Zf9sXlHk" , 337401 : "https://www.youtube.com/watch?v=KK8FHdFluOQ" , 76479 : "https://www.youtube.com/watch?v=862Pb9oDDAo" , 85723 : "https://www.youtube.com/watch?v=rE92bDAlPXI" , 499932 : "https://www.youtube.com/watch?v=EIzazUv2gtI" , 
    621870 : "https://www.youtube.com/watch?v=Zq2OLayDn9k" , 597156 : "https://www.youtube.com/watch?v=862Pb9oDDAo" ,577922 : "https://www.youtube.com/watch?v=AZGcmvrTX9M" , 1402 : "https://www.youtube.com/watch?v=R1v0uFms68U" , 94305 : "https://www.youtube.com/watch?v=P50AW_O2E3k" ,
    567971 : "https://www.youtube.com/watch?v=k2yfp6oj2hw" , 48866 : "https://www.youtube.com/watch?v=ia1Fbg96vL0" , 82596 : "https://www.youtube.com/watch?v=lptctjAT-Mk" , 60622 : "https://www.youtube.com/watch?v=h2tY82z3xXU" , 627290 : "https://www.youtube.com/watch?v=rtEaNK2PtPM" , 
    299534 : "https://www.youtube.com/watch?v=TcMBFSGVi1c" , 82816 : "https://www.youtube.com/watch?v=eEvK1Zwi9XY" , 501979 : "https://www.youtube.com/watch?v=0hAL7emClFM" , 623491 : "https://www.youtube.com/watch?v=8WzUYkzRgBE" ,694919 : "https://www.youtube.com/watch?v=aETz_dRDEys" ,
    724989 : "https://www.youtube.com/watch?v=D1yo-zswLw4" , 539885 : "https://www.youtube.com/watch?v=eLEwNo78f0k" , 734309 : "https://www.youtube.com/watch?v=CdkxJ8BD0EI" , 718444 : "https://www.youtube.com/watch?v=n4YXauObskA" ,581392 : "https://www.youtube.com/watch?v=xhNwhL58c9E" ,
    726739: " https://www.youtube.com/watch?v=ct5mQYE3Xk4" , 721452 : "https://www.youtube.com/watch?v=l1f75UBwpng" , 605116 : "https://www.youtube.com/watch?v=xw1vQgVaYNQ" , 6559986 : "https://www.youtube.com/watch?v=rQ7mb5DmLfk" , 722603 : "https://www.youtube.com/watch?v=s-9Xaq-1cA8" ,
    735110 : "https://www.youtube.com/watch?v=P8ZaZy9_kjM" , 475430 : "https://www.youtube.com/watch?v=fl2r3Fwxz_o" , 495764 : "https://www.youtube.com/watch?v=kGM4uYZzfu0" , 611395 : "https://www.youtube.com/watch?v=ursjs1ZU9Ew" ,38700 :"https://www.youtube.com/watch?v=jKCj3XuPG8M" , 
    531499 : "https://www.youtube.com/watch?v=F8s4PZ0JENc" , 516486 : "https://www.youtube.com/watch?v=eyzxu26-Wqk" ,  594328 : "https://www.youtube.com/watch?v=jcqziqIcJ_g" , 385103 : "https://www.youtube.com/watch?v=vf1aW1z437I" ,677638 : "https://www.youtube.com/watch?v=0ZNsLy2IwcY" ,
    216015 : "https://www.youtube.com/watch?v=SfZWFDs0LxA" , 512895 : "https://www.youtube.com/watch?v=A2ZDDU34gYw" , 552687 : "https://www.youtube.com/watch?v=2Mnxmcjsl8c", 587792 : "https://www.youtube.com/watch?v=CpBLtXduh_k" , 382748 : "https://www.youtube.com/watch?v=fE-e7v4bvxw" , 
    572154 : "https://www.youtube.com/watch?v=UbLBbxSm8hs" , 599521 : "https://www.youtube.com/watch?v=Y-QbgcsPGuo" , 652722 : "https://www.youtube.com/watch?v=rqnLnUsX8bk" , 372058 : "https://www.youtube.com/watch?v=xU47nhruN-Q" , 644090 : "https://www.youtube.com/watch?v=TcilGWIzvdE", 
    568160 : "https://www.youtube.com/watch?v=Q6iK6DjV_iE" , 667520 : "https://www.youtube.com/watch?v=aXc9DVfLTGo" , 317442 : "https://www.youtube.com/watch?v=tA3yE4_t6SY" , 420817 : "https://www.youtube.com/watch?v=foyufD52aog" , 550231 : "https://www.youtube.com/watch?v=de_NYbCoM2I" , 
    537915 : "https://www.youtube.com/watch?v=pitVQFz7U5s" , 621013 : "https://www.youtube.com/watch?v=GuS5BZTUVJs" , 613504 : "https://www.youtube.com/watch?v=wu6wjmEa_1U", 720395 : "https://www.youtube.com/watch?v=pitxxQYZcug" , 659986 : "https://www.youtube.com/watch?v=rQ7mb5DmLfk" ,
    601844 : "https://www.youtube.com/watch?v=5-j5HtaOSjA" , 709621 : "https://www.youtube.com/watch?v=X5kV3DlB6vo" , 738542 : "https://www.youtube.com/watch?v=pq3IJ1HTpM8" , 474350 : "https://www.youtube.com/watch?v=zqUopiAYdRg" , 340102 : "https://www.youtube.com/watch?v=W_vJhUAOFpI" , 
    574284 : "https://www.youtube.com/watch?v=QiEmfI_oNtw" , 338967 : "https://www.youtube.com/watch?v=ZlW9yhUKlkQ" , 443791 : "https://www.youtube.com/watch?v=jCFWEzIVILc" , 617708 : "https://www.youtube.com/watch?v=uOV-xMYQ7sk" , 412546 : "https://www.youtube.com/watch?v=gzJd58xHv7w" , 
    614696 : "https://www.youtube.com/watch?v=jQ8CCg1tOqc" , 689249 : "https://www.youtube.com/watch?v=SDNV6LOmtDQ" , 656690 : "https://www.youtube.com/watch?v=uaaC57tcci0" , 743601 : "https://www.youtube.com/watch?v=ep8iKiQNSrY" , 440249 : "https://www.youtube.com/watch?v=T9fLBBxjAgM" , 
    725239 : "https://www.youtube.com/watch?v=LaDpGq1ndSk" , 726887 : "https://www.youtube.com/watch?v=-W7Bek4jvos" , 744470 : "https://www.youtube.com/watch?v=4LzbwyPsFVI" , 128748 : "https://www.youtube.com/watch?v=girSv9UH_V8" , 381749 : "https://www.youtube.com/watch?v=BnaJGpjU6mg" , 
    726649 : "https://www.youtube.com/watch?v=lnPxHu6Sx5s" , 739246 : "https://www.youtube.com/watch?v=wCD1jwRfTyE" , 241829 : "https://www.youtube.com/watch?v=YP85uIohoSE" , 682110 : "https://www.youtube.com/watch?v=3s0LTDhqe5A" , 375848 : "https://www.youtube.com/watch?v=c_POfDIe5fk" , 
    716419 : "https://www.youtube.com/watch?v=VSQnOS7t4Gg" , 429617 : "https://www.youtube.com/watch?v=RWX2Kis5yYM" , 565840 : "https://www.youtube.com/watch?v=-WLvy_T-EPQ" , 453405 : "https://www.youtube.com/watch?v=AbyJignbSj0" , 399055 : "https://www.youtube.com/watch?v=XFYWazblaUA" ,
    446893 : "https://www.youtube.com/watch?v=08AExF6dETA" , 454626 : "https://www.youtube.com/watch?v=szby7ZHLnkA" , 737802 : "https://www.youtube.com/watch?v=nAJH0HmkaAU" , 508439 : "https://www.youtube.com/watch?v=gn5QmllRCn4" , 508570 : "https://www.youtube.com/watch?v=I-uIQDRS4a8" ,
    384018 : "https://www.youtube.com/watch?v=HZ7PAyCDwEg" , 512200 : "https://www.youtube.com/watch?v=rBxcF-r9Ibs" , 301528 : "https://www.youtube.com/watch?v=wmiIUN-7qhE" , 354912 : "https://www.youtube.com/watch?v=Ga6RYejo6Hk" , 583083 : "https://www.youtube.com/watch?v=fjVonI2oVeM" ,
    661677 : "https://www.youtube.com/watch?v=x6ypwdUl6Ys" , 606234 : "https://www.youtube.com/watch?v=I8WfXdxQ0Cw" , 736509 : "https://www.youtube.com/watch?v=CJP9CKgjJh4" , 338762 : "https://www.youtube.com/watch?v=vOUVVDWdXbo" , 713825 : "https://www.youtube.com/watch?v=-4SQ2G3rCtw" ,
    671145 : "https://www.youtube.com/watch?v=Zj4nz18i98w" , 514207 : "https://www.youtube.com/watch?v=okNzOq0R8yE" , 299536 : "https://www.youtube.com/watch?v=6ZfuNTqbHE8" , 618354 : "https://www.youtube.com/watch?v=weOF9_FGjOk" , 640882 : "https://www.youtube.com/watch?v=zF3VsTjoQS0"

    }


    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }
        else {


            if (names[movie.id]!==undefined) {
                const urlParams = new URLSearchParams(new URL(`${names[movie.id]}`).search);
            setTrailerUrl(urlParams.get("v"));
            } else {
                movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
    
                }).catch(error => alert("Trailer is Currently Unavailable...Try Another!!!"));
            }

              
            
        }

    }
    

    

    

    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)} //Add this key to increase scroll speed as now React will not reload every item each time we open it
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}

            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row