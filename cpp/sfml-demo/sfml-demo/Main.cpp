#include <SFML/Graphics.hpp>
using namespace sf;

int main()
{
	RenderWindow window(VideoMode(960, 540), "SFML Window");

	Texture texture;

	if (!texture.loadFromFile(".\\image\\people1.png")) {
		return EXIT_FAILURE;
	}
	Sprite sprite(texture);

	while (window.isOpen())
	{
		Event event;
		while (window.pollEvent(event))
		{
			if (event.type == Event::Closed)
				window.close();
		}

		window.clear();
		window.draw(sprite);
		window.display();
	}

	return 0;
}
