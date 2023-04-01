/*
  Warnings:

  - You are about to drop the `orde` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `imagen` on table `producto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `producto` MODIFY `imagen` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `orde`;

-- CreateTable
CREATE TABLE `Orden` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `total` DOUBLE NOT NULL,
    `pedido` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
