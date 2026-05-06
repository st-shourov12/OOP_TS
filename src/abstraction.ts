// npm install -g ts-node
// ts-node abstraction.ts

// interface
interface MediaPlayer {
    play() :  void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log(`Playing Music...`);
    }
    pause(): void {
        console.log(`Music Paused...`);
    }
    stop(): void {
        console.log(`Music Stopped...`);
    }
}