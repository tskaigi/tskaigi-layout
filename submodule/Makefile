init:
	git submodule update --init

sync:
	git submodule update --remote

sparse:
	cd tskaigi.github.io && git sparse-checkout set /constants --no-cone && git sparse-checkout add /typs --no-cone && cd -
