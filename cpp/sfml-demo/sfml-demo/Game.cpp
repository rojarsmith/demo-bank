#include "Game.h"
#include <iostream>
using namespace std;

Game::Game()
{
	window.create(VideoMode(960, 540), "SFML Window");

	if (!texture.loadFromFile(".\\image\\people1.png")) {
		cout << "Error loading file" << endl;
	}

	sprite.setTexture(texture);
	sprite.setPosition(Vector2f(100.f, 100.f));
	sprite.setScale(Vector2f(0.5f, 0.5f));
	sprite.rotate(45.f);
}

void Game::run()
{
	while (window.isOpen())
	{
		processInput();

		update();

		render();
	}
}

void Game::processInput()
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

	if (Keyboard::isKeyPressed(Keyboard::Left))
		sprite.move(-0.1, 0);
	if (Keyboard::isKeyPressed(Keyboard::Right))
		sprite.move(0.1, 0);
	if (Keyboard::isKeyPressed(Keyboard::Up))
		sprite.move(0, -0.1);
	if (Keyboard::isKeyPressed(Keyboard::Down))
		sprite.move(0, 0.1);
}

void Game::update()
{
}

void Game::render()
{
	window.clear();
	window.draw(sprite);
	window.display();
}
