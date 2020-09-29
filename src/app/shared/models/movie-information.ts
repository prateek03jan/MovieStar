export class MovieInformation {
    public Actors: string;
    public Awards: string;
    public BoxOffice: string;
    public Country: string;
    public DVD: Date;
    public Director: string;
    public Genre: string;
    public Language: string;
    public MetaScore: string;
    public Plot: string;
    public Poster: string;
    public Production: string;
    public Rated: string;
    public Ratings: Ratings[];
    public Released: string;
    public Response: boolean;
    public RunTime: string;
    public Title: string;
    public Type: string;
    public Website: string;
    public Writer: string;
    public Year: number;
    public imdbID: string;
    public imdbRating: number;
    public imdbVotes: string;
}

export class Ratings {
    public Source: string;
    public Value: string;
}