#include <SFML/Graphics.hpp>
using namespace sf;

class Game {

public:
    Game();
    ~Game() = default;

    void run();

    void processInput();

    void update();

    void render();

private:

    RenderWindow window;

    Texture texture;
    Sprite sprite;
};
