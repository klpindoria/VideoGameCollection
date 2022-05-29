import { ParentPlatform } from './platform.model';
import { Genre } from './genre.model';
import { Publisher } from './publisher.model';
import { Rating } from './rating.model';
import { Screenshot } from './screenshot.model';
import { Trailer } from './trailer.model';


export interface Game {
    id: string;
    name: string;
    subHeading: string;
    description: string;
    background_image: string;
    parent_platforms: Array<ParentPlatform>;
    released: string;
    metacritic_url: string;
    metacritic: number;
    website: string;
    genres: Array<Genre>
    publishers: Array<Publisher>
    ratings: Array<Rating>
    screenshots: Array<Screenshot>
    trailers: Array<Trailer>
}