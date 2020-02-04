class GitHub{
    constructor(){
        this.client_id='0cc0bbd9768d403e8aa7';
        this.client_secret='3c7839e16ae6109da079add299bb11d2dfced9b3';
        this.repos_count=5;
        this.repos_sort='created: asc';
        this.user='Nikita38969';
    }

    //get a user info

    async getUserData(){
        //`` - backticks
        let urlProfile= `https://api.github.com/users/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos= `https://api.github.com/users/${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        
        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos)

        const profile = await profileResponse.json();
        const repos =  await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}