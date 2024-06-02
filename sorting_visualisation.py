import pygame

pygame.init()
win = pygame.display.set_mode((700, 600))
pygame.display.set_caption("Bubble Sort")

x = 50
y = 50
width = 25
height = [200, 50, 30, 40, 5, 33, 65, 42, 100,25,60,10,50,92,150,125]
run = True


def show(height):
    for i in range(len(height)):
        pygame.draw.rect(win, (255, 0, 0), (x + 30 * i, y, width, height[i]))


def sorting():
    global run
    while run:
        execute = False
        pygame.time.delay(50)
        keys = pygame.key.get_pressed()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

        if keys[pygame.K_ESCAPE]:
            execute = True

        if execute == False:
            win.fill((0, 0, 0))
            show(height)
            pygame.display.update()
        else:
            for i in range(len(height) - 1):
                for j in range(len(height) - 1 - i):
                    if height[j] > height[j + 1]:
                        t = height[j]
                        height[j] = height[j + 1]
                        height[j + 1] = t
                    win.fill((0, 0, 0))
                    show(height)
                    pygame.time.delay(150)
                    pygame.display.update()

        if keys[pygame.K_LEFT]:
            run = True
        if keys[pygame.K_d]:
            pygame.quit()
sorting()