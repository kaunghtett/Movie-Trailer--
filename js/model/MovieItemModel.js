import APIDataModel from "./APIModel.js";

class Movie extends APIDataModel{
    constructor(id,title,poster,overview,link){
        super();
        this.id = id;
        this.title = title;
        this.poster = poster;        
        this.overview = overview;
        this.link =link;        
    }
    

    getDetailApiUrl(movie_id,key){
        return this.generateURL(this.detail_path,movie_id,key);
    }

    getVideoApiURL(movie_id,key){
        return this.generateURL(this.videos_path,movie_id,key);
    }

    generateURL(rawPath,movie_id,key){
        return this.rootURL + rawPath.replace("{movie_id}",movie_id).replace("<<api_key>>",key);
    }

    async fetchMovieDetail(movie_id,key){
        //Get movie detail
        const fetchResult = await fetch(this.getDetailApiUrl(movie_id,key));
        const jsonData = await fetchResult.json();
        console.log(jsonData);

        //Get videos of the current movie
        const fetchVideo = await fetch(this.getVideoApiURL(movie_id,key));
        const videoJsonData = await fetchVideo.json();
        console.log(videoJsonData);

        const convertedPromise = this.updateData(jsonData,videoJsonData.results);
        return convertedPromise;
    }

    updateData(data,videos){
        console.log(data);
        this.id = data.id;
        this.title = data.original_title;
        this.poster = data.backdrop_path;
        this.overview = data.overview;
        this.videos = videos;
        return this;
    }

}

export default Movie;