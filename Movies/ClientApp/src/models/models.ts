export class Actor {
   public Id: number;
   public  Name: string;
   public Gender: string;
   public Age: number;
   public Picture: string;
}

export class Movies {
    public Id: number;
    public Title: string;
    public Director: string;
    public DataReleased: string;
    public ReleasedBy: string;
    public Rating: string;
    public Genre: string;
    public GrossRevenue: number;
}

export class MovieActor {
    public MovieId: number;
    public ActorId: number;
}