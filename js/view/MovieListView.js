class MovieListView {
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("movie-info-template").innerHTML;
        this.viewport = document.getElementById("viewport");
        this.ratingstar = document.getElementById("rating");
        this.viewport.addEventListener('click',(event)=>this.detailViewBtnListener(event));
        this.ratingstar.addEventListener('click',(event)=>this.ratingStarListner(evnet));
    }

    detailViewBtnListener(event){
        event.preventDefault();
        
        const targetEle = event.target;
        if(targetEle && targetEle.parentNode.classList.contains('detail-view-button')){
            const movieId = targetEle.parentNode.dataset.id;            
            this.controller.displayDetail(movieId);
        }
    }

   
    ratingStarListner(event) {
        event.preventDefault();
        let action = 'add';
        for (const span of this.children) {
            span.classList[action]('active');
            if(span === e.target) action = 'remove';
        }

    }

    getItemTemplate(object){
        const result = this.itemTemplate
        .replace("{{this.title}}",object.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${object.poster}`)
        .replace("{{this.overview}}",this.getExcerptWords(object.overview))
        .replace("{{this.ratingstar}}",object.ratingstar)
        .replace("{{this.id}}",object.id);
        return result;
    }    

    getExcerptWords(mainString){
        const sliced = mainString.slice(0,100)
        const split = sliced.split(" ");
        split.splice(-1,1);
        const joined = split.join(" ");        
        return joined + "...";
    }

    render(templates) {  
        document.documentElement.scrollTop = 0;
        this.viewport.innerHTML = "";
        for (let template of templates) {        
            this.viewport.innerHTML += template;        
        }
    }
}

export default MovieListView;