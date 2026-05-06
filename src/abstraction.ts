// npm install -g ts-node
// ts-node ./src/abstraction.ts

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

const disco = new MusicPlayer();
disco.play();

// abstract class

abstract class Player {
    abstract play() :  void;
    abstract pause(): void;
    abstract stop(): void;
}

class VideoPlayer extends Player {
    play(): void {
        console.log(`Playing Video...`);
    }
    pause(): void {
        console.log(`Video Paused...`);
    }
    stop(): void {
        console.log(`Video Stopped...`);
    }
}

const shourovPlayer = new VideoPlayer();
shourovPlayer.play()