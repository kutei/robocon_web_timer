FROM node:23

ARG NODE_UID=9998
ARG NODE_GID=$NODE_UID
ARG USERNAME=devuser
ARG USERPASS=devuser
ARG USER_UID=9999
ARG USER_GID=$USER_UID

RUN :\
    # Reset the user
    && groupmod -g $NODE_UID node \
    && usermod -u $NODE_UID -g $NODE_UID node \
    # Reset skel's(/etc/skel) .bashrc
    && sed -i 's/#alias/alias/g' /etc/skel/.bashrc \
    # Create a development user
    && groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m -s /bin/bash $USERNAME \
    # Install development tools
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        sudo \
        bash-completion \
        git \
        vim \
    # Clear the apt cache
    && apt-get clean && rm -rf /var/lib/apt/lists/*
