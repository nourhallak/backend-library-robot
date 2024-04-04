export interface book{
    name:string;
    auther:string;
    decoded_string:string;
    position: {
        x: number;
        y: number;
        z: number;
    }
    orientation:  {
        x: number;
        y: number;
        z: number;
        w: number;    
    }
}

export const Books: book[] = [
    {
        name: "The best book in the world",
        auther: "Best Auther",
        decoded_string: "123abc",
        position: {
            x: 5.3,
            y: 3.2,
            z: 2.2,
        },
        orientation:  {
            x: 0,
            y: 0,
            z: 0,
            w: 1,    
        }
    },
    {
        name: "The 2nd best book in the world",
        auther: "2nd Best Auther",
        decoded_string: "n98d3c",
        position: {
            x: 5.3,
            y: 3.2,
            z: 2.2,
        },
        orientation:  {
            x: 0,
            y: 0,
            z: 0,
            w: 1,    
        }
    },
    {
        name: "The 3rd best book in the world",
        auther: "3rd Best Auther",
        decoded_string: "k3908v",
        position: {
            x: 5.3,
            y: 3.2,
            z: 2.2,
        },
        orientation:  {
            x: 0,
            y: 0,
            z: 0,
            w: 1,    
        }
    },
    {
        name: "The 4th best book in the world",
        auther: "4th Best Auther",
        decoded_string: "coi78h",
        position: {
            x: 5.3,
            y: 3.2,
            z: 2.2,
        },
        orientation:  {
            x: 0,
            y: 0,
            z: 0,
            w: 1,    
        }
    }, 
]



