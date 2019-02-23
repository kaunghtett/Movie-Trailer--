import APIDataModel from "./APIModel.js";


class MovieListModel extends APIDataModel {
   
    getUpcomingApiUrl(key){
        return this.rootURL + this.upcoming_path.replace("<<api_key>>",key);
    }

    async fetchUpcomingMovie(key){
        const fetchedData = await fetch(this.getUpcomingApiUrl(key));
        const jsonData = await fetchedData.json();
        return jsonData.results;
    }

   
    
}

export default MovieListModel;