

class APIDataModel {
    constructor(){
        this.rootURL = "https://api.themoviedb.org/3/";
        this.upcoming_path = "movie/upcoming?api_key=<<api_key>>&language=en-US&page=<<page>>";
        this.detail_path = "movie/{movie_id}?api_key=<<api_key>>";
        this.videos_path = "movie/{movie_id}/videos?api_key=<<api_key>>";
        this.key = "39a81e69f5a6260b8083e7cace35f28a";
    }        
}

export default APIDataModel;