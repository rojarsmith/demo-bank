#include <iostream>
#include <SFML/Graphics.hpp>
using namespace sf;
using namespace std;

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
			switch (event.type)
			{
			case Event::Closed:
				window.close();
				break;
			case Event::TextEntered:
				if (event.text.unicode < 128)
					cout << "ASCII character typed: " << static_cast<char>(event.text.unicode) << endl;
				break;
			default:
				break;
			}
		}

		window.clear();
		window.draw(sprite);
		window.display();
	}

	return 0;
}
