-- CreateTable
CREATE TABLE "hanky" (
"id" SERIAL,
    "content" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("email")
);
