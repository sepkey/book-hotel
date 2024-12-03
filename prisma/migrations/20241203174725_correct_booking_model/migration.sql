/*
  Warnings:

  - You are about to drop the column `endTime` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `numGusts` on the `booking` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numGuests` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` DROP COLUMN `endTime`,
    DROP COLUMN `numGusts`,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `numGuests` INTEGER NOT NULL;
